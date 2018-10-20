import { GET_ALL_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/actions.js'

const reducers = (state = [], action) => {
  console.log('Reducers action', action)
  console.log('Reducers current state', state)
  switch (action.type) {
    case GET_ALL_ITEMS:
      return action.payload
    case ADD_ITEM:
      return [...state, action.payload]
    case DELETE_ITEM:
      return [...state], action.payload;
    default:
      return state
  }
}

export default reducers