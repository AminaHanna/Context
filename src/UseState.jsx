import { useState } from 'react'
function UseState(){

    const [count, setCount] = useState("click here")

    const btn=()=>{
      setCount("HEYYYYY")
    }

    return(
        <>
        <h1 onClick={btn}>{count}</h1>
        </>
    )
}
export default UseState