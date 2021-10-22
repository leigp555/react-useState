import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root")
const App = () => {
    return (<div>
        <Son/>
    </div>)
}
const Son = () => {
    const [n, setN] = React.useState(0)
    const [m, setM] = React.useState(0)
    const addN = () => {
        setN(n + 1)
    }
    const addM = () => {
        setM(m + 1)
    }
    useEffect(()=>{
        console.log("数据变化了")
    })
    useEffect(() => {
        console.log('n变了')
    },[])
    useEffect(()=>{
        console.log("m变了")
    },[m])
    return (
        <>
            <div>
                {n}
                <button onClick={addN}>+1</button>
            </div>
            <div>
                {m}
                <button onClick={addM}>+1</button>
            </div>
        </>
    )
}
ReactDOM.render(<App/>, root)

export default App