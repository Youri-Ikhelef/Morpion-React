import { createContext, useContext } from "react";

export const MorpionContext = createContext();

export const useMorpionContext = () => {
  return useContext(MorpionContext);
};
