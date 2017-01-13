import { generateGridData } from '../api/wordSearch'


export const ADD_WORD = 'ADD_WORD'
export const GENERATE_GRID = 'GENERATE_GRID'
export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const SEARCH_SUCCEED = 'SEARCH_SUCCEED'

export const addWord = (word) => {
  return {
    type: ADD_WORD,
    word
  }
}

const updateGrid = (grid) => {
  return {
    type: GENERATE_GRID,
    grid
  }
}

export const produceGrid = (wordList) => (dispatch) => {
  let grid = generateGridData(wordList, 15)
  dispatch(updateGrid(grid))
}

export const addCharacter = (character, id) => {
  return {
    type: ADD_CHAR,
    character,
    id
    //row: id.split('-')[0],
    //column: id.split('-')[1]
  }
}

export const removeCharacter = (character, id) => ({
  type: REMOVE_CHAR,
  character,
  id
})

export const searchSucceed = () => {
  return {
    type: SEARCH_SUCCEED
  }
}

export const tryToAddCharacter = (character, id) => (dispatch, getState) => {
  dispatch(addCharacter(character, id))
  let word = getState().searchResult.join('')
  if (getState().wordList.includes(word)) {
    dispatch(searchSucceed())
  }
}