import findParentNode from "./findParentNode";

function selectAll(bool) {
  return function() {
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach(function(input) {
        input.checked = bool;
      });
  };
}

function approval(status, type, socket, state) {
  return function() {
    const inputChecked = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    ).filter(input => input.checked);
    const inputValues = inputChecked.map(input => parseInt(input.value));
    //get state values that match input values
    const stateFilter = state.filter(s => inputValues.includes(s.id));
    //only get id and email
    const stateValues = stateFilter.reduce(
      (acc, curr) => {
        acc.id.push(curr.id);
        acc.email.push(curr.email);
        return acc;
      },
      { id: [], email: [] }
    );
    //send to server
    socket.emit("new approval", {
      status: status, //approve or reject
      type: type, //users or rep
      values: { id: stateValues.id, email: stateValues.email }
    });
    //when the server responds back
    //hide the parent element of the input
    const inputParents = inputChecked.map(input =>
      findParentNode(input, "className", "for-approval")
    );
    socket.on("approval response", res => {
      if (res.error) {
        return alert(res.msg);
      }
      inputParents.forEach(parent => {
        parent.classList.add("fade-away");
        setTimeout(function() {
          parent.style.display = "none";
          //uncheck child element
          parent.querySelector('input[type="checkbox"]').checked = false;
        }, 1000);
      });
    });
  };
}

export { selectAll, approval };
