import React from "react";
import { useMorpionContext } from "./MorpionContext";

const ResetButton = () => {
  const { resetGame } = useMorpionContext();

  return <button onClick={resetGame}>Relancer</button>;
};

export default ResetButton;
