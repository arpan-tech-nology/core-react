import Header from "./Components/Header/header"
import Profile from "./Components/ProfileSection/profile"
import Parteners from "./Components/Parteners/Partener"
import { Link } from "react-router-dom"
// import {FormClass} from "./Components/Form/Form"
import Form from "./Components/Form/Form"
import { Incremental } from "./Components/ClassUsingIncrement/increment"

export default function Home(){
   
  return(
    <>
    <div style={{"background":"#080808"}}>
    <Header/>
    <Profile/>
    <Parteners/>
    </div>
    <Link to="/table">Table</Link>
    <Form/>
    {/* <FormClass/> */}
    <Incremental/>
    </>
  )
}