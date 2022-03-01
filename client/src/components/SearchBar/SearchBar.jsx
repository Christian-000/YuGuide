import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCardByName } from "../../actions";
import "./SearchBar.module.css";

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
    console.log(e.keyCode)
  }

  function handlePress(e) {
    if (e.keyCode == 13 ) {
      
      e.preventDefault();
      dispatch(getCardByName(name));
    }
  }

  return (
    <div className="cont" tabIndex={0} onKeyDown={(e) => handlePress(e)}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
      />
      <div  className="search" onClick={(e) => handleSubmit(e)}></div>
    </div>
  );
}
