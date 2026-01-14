import "./Contact.css"
import { SecondaryButton, PrimaryButton } from "../Projectbutton/Buttons"
import {CircleCheck } from "lucide-react";
import { useEffect, useState } from "react"
import { CheckCheck } from "lucide-react";
export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [timeline, setTimeLine] = useState("");
    const [projectDetail, setProjectDetail] = useState("");
    const [nameError, setNmaeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError ,setPhoneNumberError]=useState(false);
    const [timelineError , setTimeLineError]=useState(false);
    const [projectDetailError ,setProjectDetailError]=useState(false);

    const [sending, setSending] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [phoneNumberValidation , setPhoneNumberValidation]=useState(false);


    function ResetButton() {
        if (name && !emailValidation ) {

          setSending(false);
            setName("");
            setEmail("");
            setPhoneNumber("");
            setProjectDetail("");
            setTimeLine("");
        }

    }
    function PreventDefault(event) {
        event.preventDefault();
    }
    function EmailValidate() {
        const emailLower = email.toLocaleLowerCase();

        if(emailLower.length<0){

            console.log("no")
        }
        if (emailLower.length>0 && emailLower.includes("@") ) {
            
            const splitAt = email.split("@");
            console.log(splitAt)
            if (splitAt[1].includes(".")) {
                
                const slpitDot = splitAt[1].split(".");
                console.log(slpitDot)
                if (slpitDot[0].length > 0 && slpitDot[1].length > 0 ) {
                
                    setEmailValidation(false);
                }
            }
        }


        else {
            if(emailLower.length>0 ){

                setEmailValidation(true);
            }
            console.log("invalid")
        }
       
    }


    function validatePhoneNumber(){
        const number=phoneNumber.split("");
        for(let i=0;i<number.length;i++){
             if(number[i]>="a" && number[i]<="z"){
              

                    setPhoneNumberValidation(true);
                   break;
                
        }
        else{
            setPhoneNumberValidation(false)
        }
        }
    
        
    }

    function ShowData(event) {

        event.preventDefault();
        if (!name) {
            setNmaeError(true)
            
        }

        if (!email) {
            setEmailError(true)
    
        }
        
        if(!phoneNumber){
            setPhoneNumberError(true)
            
        }
        if(!projectDetail){
            setProjectDetailError(true)

        }
        if(!timeline){
            setTimeLineError(true)
        }
      
        if (name && !emailValidation && email && phoneNumber && timeline && projectDetail ) {
          
         setSending(true)
            
        }
       
        const data = {
            first_name: name,
            email: email,
            phone_Number: phoneNumber,
            time_line: timeline,
            project_Detail: projectDetail,
        }
        console.log(email)
        console.log(data);
        setTimeout(() => {
          

                ResetButton()
           


        }, 10000)
    }
    useEffect(()=>{
        
        EmailValidate();
        setEmailError(false);
      
    },[email])
      useEffect(()=>{
        setNmaeError(false);
    },[name])

     useEffect(()=>{
        validatePhoneNumber();
        setPhoneNumberError(false);
    },[phoneNumber])
     useEffect(()=>{
        
        setTimeLineError(false);
    },[timeline])
useEffect(()=>{
        
        setProjectDetailError(false);
    },[projectDetail])

    return (
        <>
            <div id="contactme" className="contact-wrap container-width">
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
                                    <input className="input" placeholder="Name" value={name} onInput={(e) => { setName(e.target.value)  }} />
                                    {nameError ? <div className="input-text">Name is required</div> : ""}

                                </div>
                                <div className="input-wrap">
                                    <input className="input" placeholder="Email" type="email" value={email} onInput={(e) => { setEmail(e.target.value) }}></input>
                                    {emailError ? <div className="input-text">Email is Required</div> : ""}
                                    {
                                        emailValidation ? <div className="input-text">Invalid Error</div> : ""
                                    }



                                </div>
                                <div className="input-wrap">

                                <input className="input" placeholder="Phone Number" maxLength={10} value={phoneNumber} type="tel" onInput={(e) => { setPhoneNumber(e.target.value) }}></input>
                                 {phoneNumberError ? <div className="input-text">Phone Number is Required</div> : ""}
                                 {
                                        phoneNumberValidation ? <div className="input-text">Invalid Error</div> : ""
                                    }

                                </div>
                                <div className="input-wrap input  ">

                                <select className="input1"  placeholder="Service Of Interest">
                                    <option>
                                        Service Of Interest
                                    </option>
                                    <option>
                                        option2</option></select>
                                </div>

                                <div className="input-wrap">
                                <input className="input" placeholder="Timeline" type="text" value={timeline} onInput={(e) => { setTimeLine(e.target.value) }}></input>
                                 {timelineError ? <div className="input-text">Timeline is Required</div> : ""}

                                </div>


                                    <div className="input-wrap">

                                <textarea className="text-area" value={projectDetail} type="text" placeholder="Project Details" onInput={(e) => { setProjectDetail(e.target.value) }}></textarea>
                                 {projectDetailError ? <div className="input-text">Project Detail is Required</div> : ""}
                                    </div>
                            </div>
                            <div className="form-btn"   >

                                {
                                    sending ?
                                        <div className="dataSucess">
                                            <p className="datatext">Data Has Been Send Sucessfully! <CircleCheck color="green"></CircleCheck> </p>
                                            <PrimaryButton label={"sending.."} onClick={PreventDefault}></PrimaryButton>
                                        </div>
                                        :
                                        <SecondaryButton label={"send"} onClick={ShowData} ></SecondaryButton>


                                }

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}