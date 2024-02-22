import React from "react";
import { useMorpionContext } from "../../../store/MorpionContext";
import "./RestButton.css";
import { ImLoop2 } from "react-icons/im";

const ResetButton = () => {
  const { resetGame, state } = useMorpionContext();

  const tieCheck = state.squares.flat().every((square) => square !== 0);

  return (
    <button
      className="btn reset_button"
      onClick={resetGame}
      disabled={state.winner === null && !tieCheck}
    >
      <ImLoop2 />
    </button>
  );
};

export default ResetButton;
