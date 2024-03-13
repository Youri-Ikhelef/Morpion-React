import { winCondition } from "./morpionUtils";

const initSquares = () => {
  return Array(3)
    .fill(null)
    .map(() => Array(3).fill(0));
};

export const initialStates = {
  squares: initSquares(),
  player: 1,
  winner: null,
  cpu: undefined,
  score: { player1: 0, player2: 0 },
};

/**
 * Reducer permettant d'organiser les principales fonctionnalités du morpion et des composants boutons associés
 * @param {*} state
 * @param {*} action
 * @returns Retourne les changements d'états selon les actions distribué
 */
export const morpionReducer = (state, action) => {
  switch (action.type) {
    case "CLICK_SQUARE":
      const { row, column } = action.payload;

      //Mis à jour de la valeur de la case en fonction du joueur
      const newSquare = [...state.squares];
      newSquare[row][column] = state.player;
      //Mis à jour de l'état du winner selon les valeurs de squares
      const newWinner = winCondition(newSquare);

      //Changer de joueur pour le tour suivant
      const newPlayer = state.player === 1 ? 2 : 1;
      //Mis à jour du score selon winner
      const newScore = {
        ...state.score,
        [newWinner === 1 ? "player1" : "player2"]:
          state.score[newWinner === 1 ? "player1" : "player2"] + 1,
      };
      if (newWinner) {
        return {
          ...state,
          winner: newWinner,
          score: newScore,
        };
      }
      return {
        ...state,
        squares: newSquare,
        player: newPlayer,
      };

    case "SELECT_MODE":
      const { value } = action.payload;
      return {
        ...state,
        cpu: value,
      };

    case "RESET_GAME":
      return {
        ...state,
        squares: initSquares(),
        winner: initialStates.winner,
        player: initialStates.player,
      };

    case "CLICK_BACK":
      return {
        ...initialStates,
        squares: initSquares(),
      };
    default:
      return state;
  }
};
