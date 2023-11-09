import { useState } from "react"


function Btn(props){

const btn1=()=>
{
    props.dec()
}

const btn2=()=>
{
    props.inc()
}

const btn3=()=>{
    props.rst()
}






const [color, setColor] = useState("white")

  const btn4 = color => {
    setColor(color="pink")
    document.body.style.backgroundColor = color
  }



return(
    <>
        <button onClick={btn1}>-</button>
            count {props.count}
        <button onClick={btn2}>+</button>
        <button onClick={btn3}>RESET</button>
        <h3 onClick={btn4}>click here to change bg clr</h3>
    </>
)}
export default Btn
//     return(
//         <>
//         <h1 onClick={props.btn1}>-</h1>
        
//             {props.count}
        
//         <h1 onClick={props.btn2}>+</h1>
//         </>
//     )
// }
// export default Btn