"use client"
import { useState } from "react";
import "./Form.css"
import React from "react"
export default function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    function setData(event){
       event.preventDefault();

        const data={
            first_name:firstName,
            last_name:lastName,
            email:email,
            message:message

        }
        console.log(data);
    }

    return (
        <>
            <div className="form-container">
                <form className="form">
                    <div className="flex">
                        <label htmlFor="firstName" className="label">First Name:</label>
                        <input type="text" className="form-text" value={firstName} onInput={(e)=>{setFirstName(e.target.value)}}></input>
                    </div>
                    <div className="flex">
                        <label htmlFor="secondName" className="label" >Last Name:</label>
                        <input type="text" className="form-text" value={lastName} onInput={(e)=>{setLastName(e.target.value)}}></input>
                    </div>
                    <div className="flex">
                        <label htmlFor="email" className="label">Email:</label>
                        <input type="email" className="form-text" value={email} onInput={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div className="flex">
                        <label htmlFor="message" className="label">Message:</label>
                        <textarea typeof="text"  className="form-text" value={message} onInput={(e)=>{setMessage(e.target.value)}}></textarea>
                    </div>
                    <div>
                        <button className="btn1" type="submit" onClick={setData}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
// class FormClass extends React.Component {
// //     [firstName, setFirstName] = useState("");
// //     [lastName, setLastName] = useState("");
// //     [email, setEmail] = useState("");
// //     [message, setMessage] = useState("");
// //     function setData(event) {
// //     event.preventDefault();

// //     const data = {
// //         first_name: firstName,
// //         last_name: lastName,
// //         email: email,
// //         message: message

// //     }
// //     console.log(data);
// // }
// render(){
//     return (
//         <>
//             <div className="form-container">
//                 <form className="form">
//                     <div className="flex">
//                         <label htmlFor="firstName" className="label">First Name:</label>
//                         <input type="text" className="form-text"></input>
//                     </div>
//                     <div className="flex">
//                         <label htmlFor="secondName" className="label" >Last Name:</label>
//                         <input type="text" className="form-text" ></input>
//                     </div>
//                     <div className="flex">
//                         <label htmlFor="email" className="label">Email:</label>
//                         <input type="email" className="form-text" ></input>
//                     </div>
//                     <div className="flex">
//                         <label htmlFor="message" className="label">Message:</label>
//                         <textarea typeof="text" className="form-text" ></textarea>
//                     </div>
//                     <div>
//                         <button className="btn1" type="submit" >Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// } 
// export {FormClass};