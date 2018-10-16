const bookshelf = require('./bookshelf')

const Tasks = bookshelf.Model.extend({
  tableName: 'tasks',
  idAtrribute: 'id',
  hasTimestamps: true
})

module.exports = Tasks