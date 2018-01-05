// export const DIRECTION = 'DIRECTION'; //<String>
export const SET_DIRECTION = 'SET_DIRECTION'; //(string)
// export const BOARD = 'BOARD'; //<Board>
export const SET_BOARD = 'SET_BOARD'; //(board)
// export const SCORE = 'SCORE'; //<Number>
export const SET_SCORE = 'SET_SCORE'; //(number)
// export const IS_GAME_OVER = 'IS_GAME_OVER'; //<Boolean>
export const GAME_OVER = 'GAME_OVER'; // (boolean)
// export const FOOD_NEEDED = 'FOOD_NEEDED' //<Boolean>
export const SET_FOOD_NEEDED = 'SET_FOOD_NEEDED' //(boolean)

// export const direction = (direction) => {
//   return {
//     type: DIRECTION,
//     payload: direction
//   }
// };

export const setDirection = (direction) => {
  return {
    type: SET_DIRECTION,
    payload: direction,
  }
};

// export const board = (board) => {
//   return {
//     type: BOARD,
//     payload: board,
//   }
// };

export const setBoard = (board) => {
  return {
    type: SET_BOARD,
    payload: board,
  }
};

// export const score = (score) => {
//   return {
//     type: SCORE,
//     payload: score,
//   }
// };

export const setScore = (score) => {
  return {
    type: SET_SCORE,
    payload: score,
  }
};

export const gameOver = (bool) => {
  return {
    type: GAME_OVER,
    payload: bool,
  }
};

export const setFoodNeeded = (bool) => {
  return {
    type: SET_FOOD_NEEDED,
    payload: bool,
  }
}