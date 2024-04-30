import express from 'express';
import mongoose from 'mongoose';
import todomodel from './todo.js'
import cors from 'cors'


const port = 8000;
const app = express()
app.use(cors())
app.use(express.json())

app.get('/get', (req,res) =>{
    todomodel.find().
    then((result) => res.json(result)).
    catch((err)=> console.log(err))
})

app.put('/update:id', (req,res) =>{
    const {id} = req.params
    todomodel.findByIdAndUpdate({_id: id}, {done: true}).
    then((result) => res.json(result)).
    catch((err)=> console.log(err))
})

app.post('/add', (req,res) =>{
    const task = req.body.task;
    console.log(task)
    todomodel.create({
        task:task
    }).then((result) =>res.json(result)).
    catch((err)=> res.json(err))
})

app.delete('/delete:id', (req,res) =>{
    const {id} = req.params
    todomodel.findByIdAndDelete({_id:id}).
    then(result => res.json(result)).
    catch(err => res.json(err))
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})

mongoose.connect("mongodb://127.0.0.1:27017/todolist").
then(() =>{
    console.log("connection established")
}).
catch((err) =>{
    console.log(err)
})