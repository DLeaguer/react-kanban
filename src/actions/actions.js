import axios from 'axios'

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_TASK = 'EDIT_TASK';

export const getAllItems = () => {
  return dispatch => {
    axios.get('/tasks')
    .then( response => {
      console.log('data in actionCreator', response)
      dispatch({type: GET_ALL_ITEMS, payload: response.data})
    })
    .catch( err => {
      console.log('err actions getAllItems', err)
    })
  }
}

export const addItem = (item) => {
  console.log('actions addItem', item)
  return dispatch => {
    axios.post('/newTask', item)
    .then( response => {
      console.log('response', response)
      dispatch({type: GET_ALL_ITEMS, payload: response.data})
    })
  }
}

export const deleteItem = (item) => {
  console.log('actions deleteItem', item)
  return dispatch => {
    axios.put('/deleteTask', item)
    .then( response => {
      console.log('response', response)
      dispatch({ type: DELETE_ITEM, payload: response.data })
    })
    .catch( err => {
      console.log('error actions deleteItem', err)
    })
  }
}

export const editTask = (task) => {
  console.log("\nACTION: editTask:", task);
  return dispatch => {
    axios.put("/editTask", task)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_TASK, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editTask:", err);
      })
  }
}
