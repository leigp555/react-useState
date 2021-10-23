import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")

let state=[]
let index=0
const myState = (initial) => {
    const currentIndex=index
    state[currentIndex] = state[currentIndex] === undefined ? initial : state[currentIndex]
    const setState = (newState) => {
        console.log(newState)
        state[currentIndex] = newState
        render()
    }
    index+=1
    return [state[currentIndex], setState]
}
const render=()=>{
    index=0
    ReactDOM.render(<Son/>, root)
}


const Son = () => {
    const [n, setN] = myState(0)
    const [m, setM] = myState(0)
    const addN = () => {
        setN(n + 1)
    }
    const addM = () => {
        setM(m + 1)
    }
    return (
        <>
            <div>{n}</div>
            <button onClick={addN}>+1</button>
            <hr/>
            <div>{m}</div>
            <button onClick={addM}>+1</button>
        </>
    )
}


ReactDOM.render(<Son/>, root)