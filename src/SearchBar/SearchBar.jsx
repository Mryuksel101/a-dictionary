import React, { useState } from "react";
import "./SearchBar.css";
import Apple from "./apple.png";
import { handleChange, handleKeyDown } from "./SearcBar.functions";
import { useDispatch } from "react-redux";
function SearcBar() {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  return (
    <div className="app-bar">
      <img
        className="image-apple"
        width="52"
        height="52"
        src={Apple}
        alt="bitten-apple"
      />
      <div className="search-container">
        <input
          onChange={(event) => {
            handleChange(event, setWord);
          }}
          onKeyDown={(event) => {
            handleKeyDown(event, word, dispatch);
          }}
          type="text"
          className="search-input"
          placeholder="Arama yapın..."
        />
        <button className="image-mercek"></button>
      </div>
    </div>
  );
}
export default SearcBar;
