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

app.put('/deleteTask', (req, res) => {
  console.log('req.body!!!', req.body)
  console.log('req.body.id!!!', req.body.id)
  let id = req.body.id;
  console.log('id!!!', id)
  Tasks
  // .where({ id })
  .where('id', id)
  .destroy()
  .then( () => {
    console.log('\nserver.js Delete is working!!')
    return Tasks
    .fetchAll()
    })
    .then( tasks => {
      res.json( tasks.serialize())
    })
    .catch( err => {
      console.log('err server DELETE/delete', err)
    })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})


//PUT
app.put("/editTask", (req, res) => {
  console.log("\n---> Backend PUT /editTask");
  // console.log("\nBackend - PUT req.params:", req.params);
  console.log("\nBackend - PUT req.body:", req.body);

  // const { id } = req.params;
  // console.log("\n Check id:", id);

  const updatedTask = {
    title: req.body.title,
    body: req.body.body,
    priority: req.body.priority,
    status: req.body.status,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  }

  Tasks
    .where('id', req.body.id)
    .fetch()
    .then(results => {
      console.log("\nBackend - PUT results:", results);
      results.save(updatedTask);
      return Tasks.fetchAll()
    })
    .then(tasks => {
      res.json(tasks.serialize());
    })
    .catch(err => {
      console.log("Backend PUT didn't work");
      res.json("FAILED");
    })

})
