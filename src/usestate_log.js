import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")
let state = []
let index = 0
const myState = (initial) => {
    const currentIndex = index
    state[currentIndex] = state[currentIndex] === undefined ? initial : state[currentIndex]
    const setState = (newState) => {
        state[currentIndex] = newState
        render()
    }
    index += 1
    return [state[currentIndex], setState]
}
const render = () => {
    index = 0
    ReactDOM.render(<Son/>, root)
}


const Son = () => {
    const setX = React.useState(0)[1]
    const [y,setY]=myState(0)
    let n = React.useRef(0)
    const addN = () => {
        n.current += 1
        render()
    }
    const log = () => {
        console.log("nihai")
        setTimeout(() => {                 //先点击log再点击加一打印出来的值还是原来的旧值这是因为myState每次都返回一个新的state 不是以前的旧的state了
            setX(n.current)
            // render()        //主要作用是当作render来用
            console.log(n.current)
        }, 1000)
    }
    const addY=()=>{
        setY(y+2)
    }
    return (

        <>
            <div>{n.current}</div>
            <button onClick={addN}>+1</button>
            <button onClick={log}>log</button>
            <hr/>
            <div>{y}</div>
            <button onClick={addY}>y+1</button>
        </>
    )
}


ReactDOM.render(<Son/>, root)