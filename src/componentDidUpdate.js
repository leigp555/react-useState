import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import useUpdate from "./hook/update.js"

const root = document.getElementById("root")
const App = () => {
    return (
        <div>
            <Son/>
        </div>
    )
}
const Son = () => {
    const [n, setState] = React.useState(0)
    const add = () => {
        setState(n + 1)
    }
    useEffect(()=> ()=>{console.log("组件消亡了")})
    useUpdate(()=>console.log("n变化了"),n)
    return (
        <>
            <div>{n}</div>
            <button onClick={add}>+1</button>
        </>
    )
}
ReactDOM.render(<App/>, root)