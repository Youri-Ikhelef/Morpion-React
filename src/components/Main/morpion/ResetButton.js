import React from "react";
import { useMorpionContext } from "./MorpionContext";
import "./RestButton.css";
import { ImLoop2 } from "react-icons/im";

const ResetButton = () => {
  const { resetGame, winner, squares } = useMorpionContext();

  const tieCheck = squares.flat().every((square) => square !== 0);

  return (
    <button
      className="btn reset_button"
      onClick={resetGame}
      disabled={winner === null && !tieCheck}
    >
      <ImLoop2 />
    </button>
  );
};

export default ResetButton;
