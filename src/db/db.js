let itemsFromFakeDB = [
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

let newId = 6

export const getItemsFromFakeXHR = () => new Promise((resolve, reject) => {
setTimeout( () => {
  resolve(itemsFromFakeDB.slice())
}, 500)
})

export const addItemToFakeXHR = (item) => new Promise((resolve, reject) => {
setTimeout( () => {
  item.id = newId;
  newId++;
  itemsFromFakeDB.push(item);
  console.log('itemFromFakeDB', itemsFromFakeDB)
  resolve(itemsFromFakeDB)
},500)
})

export const getItemByIdFromFakeXHR = (itemId) => new Promise( (resolve, reject) => {
setTimeout( () => {
  const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
  if (itemResponse) resolve(itemResponse);
  else reject({status: 404, message: 'item not found'})
}, 500)
})

export const deleteItemByIdFromFakeXHR = (itemId) => new Promise ( (resolve, reject) => {
setTimeout( () => {
  const itemIdx = itemsFromFakeDB.findIndex( item => item.id === itemId);
  if (itemIdx === -1) {
    reject({status: 500, message: 'item not found'})
  } else {
    itemsFromFakeDB = itemsFromFakeDB.filter( item => {
      return item.id !== itemId
    })
    console.log('itemsFromFakeDB', itemsFromFakeDB)
    console.log('itemIdx', itemIdx)
    resolve({status: 'ok'})
  }
})
})