import { MorpionContext } from "./MorpionContext";
import { scrollToMain } from "../App";
import { useReducer, useEffect } from "react";
import { morpionReducer, initialStates } from "./morpionReducer";
import { cpuPlayer2Move } from "./morpionUtils";

export const MorpionProvider = ({ children, mainRef }) => {
  const [state, dispatch] = useReducer(morpionReducer, initialStates);

  useEffect(() => {
    if (state.cpu === true && state.player === 2 && !state.winner) {
      const cpuMove = cpuPlayer2Move(state.squares);
      if (cpuMove) {
        const { row, column } = cpuMove;
        setTimeout(() => {
          handleClickSquare(row, column, true);
        }, 1000);
      }
    }
    //eslint-disable-next-line
  }, [state.player]);

  const handleClickSquare = (row, column, cpuPlayer2Move) => {
    //Empeche de cocher une case déja coché ou si il y a un winner
    if (state.squares[row][column] !== 0 || state.winner) return;
    //Empeche de cocher une case si c'est le tour du cpu
    if (!cpuPlayer2Move && state.player === 2 && state.cpu) return;

    dispatch({
      type: "CLICK_SQUARE",
      payload: { row, column },
    });
  };

  const handleClickSelectMode = (value) => {
    dispatch({ type: "SELECT_MODE", payload: { value } });
    scrollToMain(mainRef);
  };

  const handleClickBack = () => {
    dispatch({ type: "CLICK_BACK" });
    scrollToMain(mainRef);
  };

  //Permet de reinitialiser les valeurs appelé dans le ResetButton
  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
    scrollToMain(mainRef);
  };

  //Valeurs exportable par le Provider
  const value = {
    state,
    handleClickSquare,
    resetGame,
    handleClickSelectMode,
    handleClickBack,
  };

  return (
    <MorpionContext.Provider value={value}>{children}</MorpionContext.Provider>
  );
};
