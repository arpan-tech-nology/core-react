
import { BrowserRouter as Router ,Route ,Link , Routes } from "react-router-dom"
import Home from "./Home"
import Table from "./Components/Table/Table "
import { TableData } from "./Components/Table/Table "
import Project from "./Project"

export default function App(){
   const items = [
      { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
      { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
      { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
      { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic"},
      { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
      { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
      { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
      { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
      { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
      { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
    ]

  return(
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/table" element={<Table items={items}/>}></Route>
        <Route path="/table2" element={<TableData items={items}/>}></Route>
        <Route path="/project"element={<Project/>}></Route>
         </Routes>
    </Router>
    </>
  )
}