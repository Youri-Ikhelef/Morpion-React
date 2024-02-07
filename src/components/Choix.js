import React from "react";
import { useMorpionContext } from "./morpion/MorpionContext";

const Choix = () => {
  const { handleClickChoix } = useMorpionContext();
  return (
    <div>
      <button onClick={handleClickChoix}>CPU</button>
      <button>local</button>
    </div>
  );
};

export default Choix;
