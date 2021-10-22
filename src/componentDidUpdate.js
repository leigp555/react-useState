import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';


const useUpdate=(fn,n)=>{
    const [count, setCount] = React.useState(0)
    useEffect(() => {
        setCount(x => x + 1)
    }, [n])
    useEffect(() => {
        if (count > 1) {
            fn()
        }
    }, [count,fn])
}


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
    useUpdate(()=>console.log("n变化了"),n)
    return (
        <>
            <div>{n}</div>
            <button onClick={add}>+1</button>
        </>
    )
}
ReactDOM.render(<App/>, root)