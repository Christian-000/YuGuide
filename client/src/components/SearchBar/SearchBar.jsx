import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { activate, getCardByName } from "../../actions";
import style from "./SearchBar.module.css";

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
    dispatch(activate());
  }

  function handlePress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      dispatch(getCardByName(name));
      dispatch(activate());
    }
  }

  return (
    <div className={style.cont} tabIndex={0} onKeyDown={(e) => handlePress(e)}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
        autoFocus="true"
      />
      <div className={style.search} onClick={(e) => handleSubmit(e)}></div>
    </div>
  );
}
