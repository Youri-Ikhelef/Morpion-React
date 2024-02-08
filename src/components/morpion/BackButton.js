import React from "react";
import { useMorpionContext } from "./MorpionContext";

const BackButton = () => {
  const { handleClickBack } = useMorpionContext();

  return <button onClick={handleClickBack}>Back</button>;
};

export default BackButton;
