import "./Contact.css"
import { SecondaryButton, PrimaryButton } from "../Projectbutton/Buttons"
import { useEffect, useState } from "react"
export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [timeline, setTimeLine] = useState("");
    const [projectDetail, setProjectDetail] = useState("");
    // const [service ,setService]=useState("");
    const [nameError, setNmaeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError ,setPhoneNumberError]=useState(false);
    const [timelineError , setTimeLineError]=useState(false);
    const [projectDetailError ,setProjectDetailError]=useState(false);

    const [sending, setSending] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [phoneNumberValidation , setPhoneNumberValidation]=useState(false);

    // console.log(name)

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
        // for(let i=0;i>emailLower.length;i++){
        //     if(emailLower[i]==" "){
        //         setEmailValidation(false);
        //     }
        // }
        // console.log(emailLower)
        if(emailLower.length<0){
            // setEmailValidation(true);
            // setEmailError(true)
            console.log("no")
        }
        if (emailLower.length>0 && emailLower.includes("@") ) {
            // setEmailValidation(true)
            const splitAt = email.split("@");
            console.log(splitAt)
            if (splitAt[1].includes(".")) {
                // setEmailValidation(true)
                const slpitDot = splitAt[1].split(".");
                console.log(slpitDot)
                if (slpitDot[0].length > 0 && slpitDot[1].length > 0 ) {
                    // console.log(email);
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
        // console.log(email.split(" ").includes("A"))
    }
    //  EmailValidate()

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
            // setSending(false)
        }

        if (!email) {
            setEmailError(true)
            // setEmailValidation(false)
            // setSending(false)
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
        // if(email){
        //     EmailValidate()
        // }
        if (name && !emailValidation && email && phoneNumber && timeline && projectDetail ) {
          
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
        console.log(email)
        console.log(data);
        setTimeout(() => {
          

                ResetButton()
           


        }, 3000)
    }
    useEffect(()=>{
        // setEmailValidation(false)
        
        EmailValidate();
        setEmailError(false);
        // setNmaeError(false);
    },[email])
      useEffect(()=>{
        // EmailValidate();
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
                                <div className="input-wrap">

                                <select className="input1 input-with-arrow"  placeholder="Service Of Interest">
                                    <option>
                                        Service Of Interest
                                    </option>
                                    <option>
                                        option2</option></select>
                                </div>


                                             
                                {/* <div class="wrapper">
                                    <input className="input" placeholder="Phone Number"/>
                                    <span class="icon"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8.5L12 15.5L5 8.5" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </span>
                                </div> */}
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
                                {/* <button className="secondary-btn">Send</button> */}

                                {
                                    sending ?
                                        <div className="dataSucess">
                                            <p className="datatext">Data Has Been Send Sucessfully! </p>
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