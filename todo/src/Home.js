import React, { useEffect } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BsFillTrashFill,BsFillCheckCircleFill } from 'react-icons/bs'
import Create from './Create';
import { useState} from 'react';
import axios from 'axios'
const Home = () => {

    const [todos, setTodo] = useState([])
    useEffect (() => {
        axios.get('http://localhost:8000/get').
        then((result) => {
            setTodo(result.data)
        }).
        catch((err) =>{
            console.log(err)
        })
    },[])

    const handleEdit = (id) =>{
        axios.put('http://localhost:8000/update'+id).
        then((result) => window.location.reload()).
        catch((err) =>{
            console.log(err)
        })
    }
    const handleDel = (id) =>{
        axios.delete('http://localhost:8000/delete'+id).
        then(result => window.location.reload()).
        catch(err => console.log(err))
    }

    return (
        <div className='Home'>
            <h1> To-Do List </h1>
            <Create />
            {
                todos.length===0 ?
                <h2>Nothing to show</h2>
                :
                todos.map(todo =>(
                    <div className='task'>
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {
                                todo.done?
                                <BsFillCheckCircleFill />
                                :
                                <BsCircleFill className='icon' />
                            }
                            <p className={ todo.done ? 'line-through': ''}>{todo.task}</p>
                        </div>
                        <div>
                            <span onClick={()=> handleDel(todo._id)}>
                                <BsFillTrashFill className='icon' />
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Home;