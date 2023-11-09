import { useContext } from "react"
import { AppContext } from "./App"

function UseContext(){
    const {txt,setTxt}=useContext(AppContext)
    return(
        <>
        <button onClick={()=>setTxt("change using context")}>{txt}</button>
        </>
    )
}
export default UseContext