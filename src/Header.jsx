import { useContext } from "react"
import { AppContext } from "./App"

function Header(){
    const {count}= useContext(AppContext)
    return(
        <>
        <h1>HEAD {count}</h1>
        </>
    )
}
export default Header