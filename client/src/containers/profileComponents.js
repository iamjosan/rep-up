export function userProfile(type, prop, stateSetter, socket = null) {
  const obj = {
    fetch: (callback = null) => {
      //send data to server
      //prop will be the match.params.username from Router
      socket.emit("fetch user", prop);
      //listen to server to receive data
      socket.on("send user", userInfo => {
        stateSetter({ user: userInfo[0] }, () => {
          console.log("inside setState callback");
          callback;
        });
      });
    },
    store: () => {
      //prop will be the state from the redux store
      stateSetter({ user: prop.user });
    }
  };

  return obj[type];
}
