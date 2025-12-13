import "./Header.css"
import { useState } from "react"
import { PrimaryButton } from "../Projectbutton/Buttons"
export default function ProjectHeader() {
    const [sidebarOpen ,setSideBarOpen]=useState(false); 
    function sidebar(){
        console.log("click");


    }
    return (
        <>
            <div className="nav-bar-container">
                <nav className="nav-bar">
                    <div className="toogler" onClick={sidebar}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 12H3" stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 6H3" stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 18H3" stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>

                    
                    <div className="logo">
                        <img src="./LOGO.png"></img>
                    </div>
                    <ul className="nav-list ">
                        <li className="list-item"><a href="#" className="list-link color">Home</a></li>
                        <li className="list-item"><a href="#" className="list-link">Services</a></li>
                        <li className="list-item"><a href="#" className="list-link">About me</a></li>
                        <li className="list-item"><a href="#" className="list-link">Portfolio</a></li>
                        <li className="list-item"><a href="#" className="list-link">Contact me</a></li>


                    </ul>
                    <div className="header-btn">
                        <PrimaryButton label={"Hire Me"} />

                        {/* <button className="primary-btn">Hire me</button> */}
                    </div>
                </nav>
            </div>
        </>
    )
}