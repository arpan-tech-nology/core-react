import "./Table.css"
import React from "react"

export default function Table(props){
return(
    <>
   <table className="table">
    <thead>
        <tr >
            <th className="heading">Item</th>
            <th className="heading">Amount</th>
            <th className="heading">Date</th>
            <th className="heading">Category</th>
        </tr>
    </thead>
    <tbody>
    {props.items.map((item)=>(
        
            <tr key={item.id} >
            <td className="data">{item.name}</td>
            <td className="data">{item.amount}</td>
            <td className="data">{item.spendDate}</td>
            <td className="data">{item.category}</td>
             </tr>
       
    ))
    }
    </tbody>
   </table>
    </>
)
}

class TableData extends React.Component{
    render(){
        return(
            <>
            <hr></hr>
             <table className="table">
    <thead>
        <tr>
            <th className="heading">Item</th>
            <th className="heading">Amount</th>
            <th className="heading">Date</th>
            <th className="heading">Category</th>
        </tr>
    </thead>
    <tbody>
    {this.props.items.map(item=>(
        
            <tr key={item.id}>
            <td className="data">{item.name}</td>
            <td className="data">{item.amount}</td>
            <td className="data">{item.spendDate}</td>
            <td className="data">{item.category}</td>
             </tr>
       
    ))
    }
    </tbody>
    </table>
            </>
        )
    }
}

export {TableData}