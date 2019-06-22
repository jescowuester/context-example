import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Consumer from "./Consumer";
const Data = React.createContext();

const WithContext = ({ children }) => (
  <Data.Provider value={"this is the context val"}>{children}</Data.Provider>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WithContext>
          <Consumer />
        </WithContext>
      </header>
    </div>
  );
}

export { Data };
export default App;
