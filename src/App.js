import Header from "./Components/Header/header"
import Profile from "./Components/ProfileSection/profile"
import Parteners from "./Components/Parteners/Partener"
export default function App(){
  return(
    <>
    <div style={{"background":"#080808"}}>
    <Header/>
    <Profile/>
    <Parteners/>
    </div>
    </>
  )
}