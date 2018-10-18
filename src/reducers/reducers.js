import { GET_ALL_ITEMS, ADD_ITEM } from '../actions/actions.js'

const reducers = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      //do something
      return action.payload
    case ADD_ITEM:
      //do something
    default:
      return state
  }
  // return state
}

export default reducers