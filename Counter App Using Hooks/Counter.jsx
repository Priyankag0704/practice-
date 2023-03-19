import React,{useState} from 'react'
import "./counter.css";

const Counter = () => {
    let[count,setCount]=useState(0)
    let handleIncrement=()=>{
        setCount(count+1)
    }
    let handleDecrement=()=>{
        setCount(count-1)
    }
    let handleReset=()=>{
        setCount(0)
    }
  return (
    <div className="MainDiv">
    <h1>{count}</h1>
    <div className='btngroup'>
    <button onClick={handleIncrement}>+ increment</button>
    <button onClick={handleDecrement}>- decrement</button>
    <button onClick={handleReset}>Reset</button>
    </div>
    </div>
  )
}

export default Counter