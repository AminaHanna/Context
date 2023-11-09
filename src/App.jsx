import { useState ,createContext } from 'react'
import './App.css'
import Home from './Home'
import UseState from './UseState'
import Btn from './Btn'
import UseContext from './UseContext'
import Header from './Header'


export const AppContext = createContext()

function App() {
 
  const [txt ,setTxt]=useState("click here")
  const [count, setCount] = useState(0)

  const minus=()=>{
    if(count===0)
    {
      stop
    }else
    {
      setCount(count-1)
    }}

  const plus=()=>{
    setCount(count+1)
  }

  const reset=()=>{
    setCount(0)
  }


  const fun=()=>{
    console.log('nnnn')
  }

  return (
    <>
     <AppContext.Provider value={{txt,setTxt,count}}>
      <Header/>
        <Home data={'hyyy'} myfn={fun()}/>
        <UseState/>
        {/* <Btn btn1={minus} btn2={plus} count={count}/> */}
        <Btn dec={minus} inc={plus} count={count} rst={reset}/>

        <UseContext/>
      </AppContext.Provider>
    </>
  )
}

export default App