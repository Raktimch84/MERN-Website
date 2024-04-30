import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [text, settext] = useState()
    const addText =() =>{
        axios.post('http://localhost:8000/add',{
            task: text
        }).then(result => window.location.reload()).
        catch((err) => console.log(err))
    }
    return (
        <div className='create'>
            <input type='text' className='field' placeholder='Enter activity' onChange={(e) => {settext(e.target.value)}}></input>
            <button className='adder' onClick={addText}>Click</button>
        </div>
    )
}

export default Create;