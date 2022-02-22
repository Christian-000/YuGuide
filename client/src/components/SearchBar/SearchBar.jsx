import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCardByName } from "../../actions";

export default function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCardByName(name));
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
      />
      {/* agregar iconos con material UI */}
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        submit
      </button>
    </div>
  );
}
