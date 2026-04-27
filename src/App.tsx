import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";

function App() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e);
    console.log(search);
  };

  const onclickfun = (ev: SyntheticEvent) => {
    console.log(ev.target);
  };

  return (
    <div className="App">
      {/* <Card /> */}
      {/* <Card /> duplicating is wrong. we need to do the props thing. */}
      <Search
        onclickfun={onclickfun}
        search={search}
        handleChange={handleChange}
      />
      <CardList />
    </div>
  );
}

export default App;
