const initialState = [
  {
    id: 1,
    title: '1 Make Better Styles.',
    body: 'body 1',
    priority: 'Medium',
    type: 'queue',
    by: 'Jon',
    to: 'Renee'
  },
  {
    id: 2,
    title: '2 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
    body: 'body 2',
    priority: 'Medium',
    type: 'queue',
    by: 'Jon',
    to: 'Renee'
  },
  {
    id: 3,
    title: '3 Make Better Styles.',
    body: 'body 3',
    priority: 'Medium',
    type: 'progress',
    by: 'Jon',
    to: 'Renee'
  },
  {
    id: 4,
    title: '4 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
    body: 'body 4',
    priority: 'Medium',
    type: 'done',
    by: 'Jon',
    to: 'Renee'
  },
  {
    id: 5,
    title: '5 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
    body: 'body 5',
    priority: 'Medium',
    type: 'done',
    by: 'Jon',
    to: 'Renee'
  }
]

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

export const getAllItems = () => {
  console.log('actions getAllItems', getAllItems)
  return {
    type: GET_ALL_ITEMS,
    payload: initialState
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
