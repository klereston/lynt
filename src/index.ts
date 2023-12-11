import express from 'express';
import Todo from './todo'


//CREATE EXPRESS APP
const app = express()
const todo = new Todo()

app.use(express.json()) // middleware transform the req.body to json

const PORT = 3000

//CREATE END POINT                      (user: ping, app: pong)
app.get('/ping', (_req, res)=>{
    console.log("someone ping here")
    res.send(todo.sayHi()) //+ new Date().toLocaleDateString())  //'pong'
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})


todo.show()