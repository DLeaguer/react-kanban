const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const Tasks = require('./db/models/tasks.js');
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {
  // res.sendFile('../public/index.html')
  res.send('Hello')
})

app.get('/tasks', (req, res) => {
  Tasks
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('error', err)
  })
})

app.post('/newTask', (req, res) => {
  console.log('\nPOSTING!!!!!')
  console.log('\nreq.body!!!!!\n')
  console.log(req.body)
  const task = req.body
  console.log('\ntask!!!!!\n')
  console.log(task)
  const newTask = {
    title: task.title,
    body: task.body,
    priority: task.priority,
    type: task.type,
    by: task.by,
    to: task.to
  }
  console.log('\nnewTask!!!!!\n')
  console.log(newTask)
  Tasks
  .forge(newTask)
  .save()
  .then( () => {
    return Tasks
    .fetchAll()
    .then( result => {
      res.json(result.serialize())
    })
    .catch( err => {
      console.log('err server.js POST/newTask', err)
    })
  })
})

app.delete('/delete/:id', (req, res) => {
  let { id } = req.params;
  console.log('id', id)
  Tasks
  .where({ id })
  .destroy()
  .then( () => {
    return Tasks
    .fetchAll()
    .then( result => {
      res.json(result.serialize())
    })
    .catch( err => {
      console.log('err server DELETE/delete/:id', err)
    })
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})

