const bookshelf = require('./bookshelf')

const Tasks = bookshelf.Model.extend({
  tableName: 'tasks',
  hasTimestamps: true
})

module.exports = Tasks