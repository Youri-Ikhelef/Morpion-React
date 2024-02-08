import React from "react";
import { useMorpionContext } from "./morpion/MorpionContext";

const Choix = () => {
  const { handleClickChoix, cpu } = useMorpionContext();

  if (cpu !== undefined) {
    return null;
  }

  return (
    <div>
      <button onClick={() => handleClickChoix(true)}>CPU</button>
      <button onClick={() => handleClickChoix(false)}>local</button>
    </div>
  );
};

export default Choix;
