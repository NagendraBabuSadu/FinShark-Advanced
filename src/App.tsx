import React from "react";
import logo from "./logo.svg";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";

function App() {
  return (
    <div className="App">
      {/* <Card /> */}
      {/* <Card /> duplicating is wrong. we need to do the props thing. */}
      <CardList />
    </div>
  );
}

export default App;
