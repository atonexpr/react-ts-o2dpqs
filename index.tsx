import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

//################### STEP 1 ################################
type ContextProps = {
  authenticated: boolean;
};

export const AppContext = React.createContext<Partial<ContextProps>>({});

//################### STEP 2 ################################
const ConsumerSide = () => {
  return (
    <AppContext.Consumer>
      {({ authenticated }) => {
        if (authenticated) {
          return <h1>Logged in!</h1>;
        }
        return <h1>You need to sign in</h1>;
      }}
    </AppContext.Consumer>
  );
};

//################### STEP 3 ################################
const App = () => {
  return (
    <AppContext.Provider
      value={{
        authenticated: false
      }}
    >
      <ConsumerSide />
    </AppContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
