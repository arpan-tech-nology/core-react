import "./Contact.css"
import { SecondaryButton ,PrimaryButton } from "../Projectbutton/Buttons"
import { useState } from "react"
export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [timeline, setTimeLine] = useState("");
    const [projectDetail, setProjectDetail] = useState("");
    // const [service ,setService]=useState("");
    const [nameError ,setNmaeError]=useState(false);
    const [emailError ,setEmailError]=useState(false);
    const [sending ,setSending]=useState(false);
    // console.log(name)
    function ShowData(event) {

        event.preventDefault();
        if(!name){
            setNmaeError(true)
        }
        if(!email){
            setEmailError(true)
        }
        if(name && email){
            setSending(true)
        }
        // setNmaeError(false)
        // setEmailError(false)

        // console.log("yes")
        const data = {
            first_name: name,
            email: email,
            phone_Number: phoneNumber,
            time_line: timeline,
            project_Detail: projectDetail,
        }
        console.log(data);
        setTimeout(()=>{
            setSending(false);
            setName("");
            setEmail("");
            setPhoneNumber("");
            setProjectDetail("");
            setTimeLine("");
        },3000)
    }


    return (
        <>
            <div className="contact-wrap container-width">
                <div className="contact-container">
                    <div className="center">
                        <p className="service-text">Contact Me</p>

                        <p className="service-text-color">
                            Cultivating Connections: Reach Out and Connect with Me
                        </p>
                    </div>
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="input-wrap">
                                <input className="input" placeholder="Name" value={name} onInput={(e) => { setName(e.target.value) }}/>
                               {nameError?<div className="input-text">Name is required</div>:""}

                                </div>
                                <div className="input-wrap">
                                <input className="input" placeholder="Email" value={email} onInput={(e) => { setEmail(e.target.value) }}></input>
                                {emailError?<div className="input-text">Email is Required</div>:""}

                                </div>
                                

                                <input className="input" placeholder="Phone Number" onInput={(e) => { setPhoneNumber(e.target.value) }}></input>
                              
                                <select className="input1 input-with-arrow" placeholder="Service Of Interest">
                                    <option>
                                        Service Of Interest
                                    </option>
                                    <option>
                                        option2</option></select>
                                {/* <div class="wrapper">
                                    <input className="input" placeholder="Phone Number"/>
                                    <span class="icon"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8.5L12 15.5L5 8.5" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </span>
                                </div> */}

                                <input className="input" placeholder="Timeline" onInput={(e) => { setTimeLine(e.target.value) }}></input>
                                <textarea className="text-area" placeholder="Project Details" onInput={(e) => { setProjectDetail(e.target.value) }}></textarea>
                            </div>
                            <div className="form-btn"   >
                                {/* <button className="secondary-btn">Send</button> */}
                                {
                                    sending?
                                    <div className="dataSucess">
                                        <p className="datatext">Data Has Been Send Sucessfully! </p>
                                    <PrimaryButton label={"sending.."}></PrimaryButton>
                                        </div>
                                    :
                                        <SecondaryButton  label={"send"} onClick={ShowData} ></SecondaryButton>
                                       
                                    
                                }
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}