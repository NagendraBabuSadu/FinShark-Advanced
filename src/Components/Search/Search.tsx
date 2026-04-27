import React, { JSX, useState, ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onclickfun: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onclickfun,
  search,
  handleChange,
}): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onclickfun(e)}>Click</button>
    </div>
  );
};

export default Search;
