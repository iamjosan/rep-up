export function onChange() {
  return function(e) {
    if (e.target.checked) {
      return this.setState((prevState, props) => {
        checked: [...prevState, e.target.value];
      });
    }
    //remove this value from state
    this.setState((prevState, props) => {
      checked: [...prevState.filter(item => item !== e.target.value)];
    });
  };
}
