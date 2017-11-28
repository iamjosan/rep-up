export function onChange() {
  return function(e) {
    //save event in variable
    let target = e.target;
    if (target.checked) {
      return this.setState((prevState, props) => {
        return { checked: [...prevState.checked, target.value] };
      });
    }
    //remove this value from state
    this.setState((prevState, props) => {
      return {
        checked: [...prevState.checked.filter(item => item !== target.value)]
      };
    });
  };
}
