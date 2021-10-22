import React, {useEffect} from "react";
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
export default useUpdate