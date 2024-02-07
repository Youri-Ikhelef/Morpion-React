//inactif

import { createContext, useContext, useEffect, useState } from "react";

const MorpionContext = createContext();

export const useMorpionContext = () => {
  return useContext(MorpionContext);
};

export const MorpionProvider = ({ children }) => {
  //Valeurs initiales des états
  const initialSquares = Array(3)
    .fill(null)
    .map(() => Array(3).fill(0));
  const initialPlayer = 1;
  const initialWinner = null;
  const initialCpu = undefined;

  const [squares, setSquares] = useState(initialSquares);
  const [player, setPlayer] = useState(initialPlayer);
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [winner, setWinner] = useState(initialWinner);
  const [cpu, setCpu] = useState(initialCpu);

  const handleClickSquare = (row, column) => {
    console.log(`Clic sur case ${row} ${column}`);
    //Empeche de cocher une case déja coché ou si il y a un winner
    if (squares[row][column] !== 0 || winner) {
      return;
    }
    //Mis à jour de la valeur de la case en fonction du joueur
    const newSquare = [...squares];
    newSquare[row][column] = player;
    //Mis à jour de l'état du tableau
    setSquares(newSquare);
    //Mis à jour de l'état du winner selon les valeurs de squares
    const newWinner = winCondition(newSquare);
    if (newWinner) {
      setWinner(newWinner);
      //Mis à jour du score selon winner
      setScore((prevScore) => ({
        ...prevScore,
        [newWinner === 1 ? "player1" : "player2"]:
          prevScore[newWinner === 1 ? "player1" : "player2"] + 1,
      }));
    }
    //Changer de joueur pour le tour suivant
    setPlayer(player === 1 ? 2 : 1);
  };

  const handleClickChoix = () => {
    const tempCpu = true;
    setCpu(tempCpu);
  };

  //Logique vs CPU
  const cpuPlayer2Move = () => {
    if (cpu === true && player === 2 && !winner) {
      const emptySquares = getEmptySquares(squares);
      if (emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const { row, column } = emptySquares[randomIndex];

        handleClickSquare(row, column);
      }
    }
  };

  useEffect(() => {
    cpuPlayer2Move();
    //eslint-disable-next-line
  }, [player]);

  //Permet de reinitialiser les valeurs appelé dans le ResetButton
  const resetGame = () => {
    setSquares(initialSquares);
    setPlayer(initialPlayer);
    setWinner(initialWinner);
  };

  //Valeurs exportable par le Provider
  const value = {
    squares,
    player,
    score,
    handleClickSquare,
    winner,
    resetGame,
    handleClickChoix,
  };

  return (
    <MorpionContext.Provider value={value}>{children}</MorpionContext.Provider>
  );
};

/**
 * Règles du morpion permettant de retourner les conditions de victoire/egalité
 * @param {*} squares
 * @returns
 */
export const winCondition = (squares) => {
  //Vérification des lignes, colonnes et diagonales
  for (let i = 0; i < 3; i++) {
    //lignes
    if (
      squares[i][0] !== 0 &&
      squares[i][0] === squares[i][1] &&
      squares[i][0] === squares[i][2]
    ) {
      return squares[i][0];
    }
    //colonnes
    if (
      squares[0][i] !== 0 &&
      squares[0][i] === squares[1][i] &&
      squares[0][i] === squares[2][i]
    ) {
      return squares[0][i];
    }
  }
  //diagonales
  if (
    squares[0][0] !== 0 &&
    squares[0][0] === squares[1][1] &&
    squares[0][0] === squares[2][2]
  ) {
    return squares[0][0];
  }
  if (
    squares[0][2] !== 0 &&
    squares[0][2] === squares[1][1] &&
    squares[0][2] === squares[2][0]
  ) {
    return squares[0][2];
  }
  //match nul
  return 0;
};

// Fonction qui récupère les valeurs des cases vides pour le cpu
export const getEmptySquares = (squares) => {
  const emptySquares = [];
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
      if (squares[i][j] === 0) {
        emptySquares.push({ row: i, column: j });
      }
    }
  }
  return emptySquares;
};
