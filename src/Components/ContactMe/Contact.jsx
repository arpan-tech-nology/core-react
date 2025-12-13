import "./Contact.css"
import { SecondaryButton } from "../Projectbutton/Buttons"
export default function ContactMe() {
    return (
        <>
            <div className="contact-wrap">
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
                                <input className="input" placeholder="Name"></input>
                                <input className="input" placeholder="Email"></input>

                                <input className="input" placeholder="Phone Number"></input>
                                        {/* //chat gpt */}
                                <input className="input input-with-arrow" placeholder="Service Of Interest"></input> 
                                {/* <div class="wrapper">
                                    <input className="input" placeholder="Phone Number"/>
                                    <span class="icon"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8.5L12 15.5L5 8.5" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </span>
                                </div> */}

                                <input className="input" placeholder="Timeline"></input>
                                <textarea className="text-area" placeholder="Project Details"></textarea>
                            </div>
                            <div className="form-btn">
                                {/* <button className="secondary-btn">Send</button> */}
                                <SecondaryButton label={"Send"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}