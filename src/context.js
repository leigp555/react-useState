import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById("root")



const themeContext = React.createContext(null)
const App = () => {
    const [theme, setTheme] = React.useState("red")
    return (
        <div className={theme}>
        <themeContext.Provider value={{theme,setTheme}}>
            <Son />
        </themeContext.Provider>
        </div>
    )
}

const Son = () => {
    const {setTheme}=React.useContext(themeContext)
    const red = () => {
        setTheme("red")
    }
    const green = () => {
        setTheme("green")
    }
    return (
        <>
            <button onClick={red}>红色</button>
            <button onClick={green}>绿色</button>
        </>
    )
}

ReactDOM.render(<App />,root)







