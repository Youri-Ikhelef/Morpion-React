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
  return null;
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

//Logique vs CPU
export const cpuPlayer2Move = (squares) => {
  const emptySquares = getEmptySquares(squares);
  if (emptySquares.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
  }
};
