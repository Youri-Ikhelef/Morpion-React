import "./SelectMode.css";
import React from "react";
import { useMorpionContext } from "../../store/MorpionContext";

const SelectMode = () => {
  const { handleClickSelectMode, state } = useMorpionContext();

  if (state.cpu !== undefined) {
    return null;
  }

  return (
    <div className="conteneur-select">
      <h2>Sélectionnez le mode de jeu</h2>
      <button
        className=" btn selectmode"
        onClick={() => {
          handleClickSelectMode(true);
        }}
      >
        vs CPU
      </button>
      <button
        className=" btn selectmode"
        onClick={() => {
          handleClickSelectMode(false);
        }}
      >
        Local
      </button>
    </div>
  );
};

export default SelectMode;
