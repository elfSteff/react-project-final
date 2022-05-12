import React from "react";

const Store = React.createContext();

const initState = {
    bingewatcherMain: [],
    shows: [],
    watched: [],
    finished: []
}

const StoreProvider = ({ children }) => {
  const [globalState, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "SET_WATCHED":
        return { ...state, watched: action.payload };
      case "SET_FINISHED":
        return { ...state, finished: action.payload };
      default:
        return state;
    }
  }, initState);

  return <Store.Provider value={{globalState, dispatch}}>{children}</Store.Provider>;
};

export { Store, StoreProvider };
