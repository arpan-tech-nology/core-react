import "./Header.css"
import { useEffect, useState } from "react"
import { XCircle } from "lucide-react";
import { PrimaryButton } from "../Projectbutton/Buttons"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function ProjectHeader() {

    const [showHeader, setShowHeader] = useState(false);
    const [sidebar, setSideBar] = useState(false);
    const [sectionActive ,setSectionActive]=useState("home");
    const [cursor, setCursorPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY == 0) {
                setShowHeader(false)
            }
           
            if (currentScrollY > 900) {
                setShowHeader(true);
            }
        }
        );
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
           
                setCursorPos({ x: e.clientX, y: e.clientY });
            
        };
    window.addEventListener("mousemove",handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    function SideBarToogler() {


        if (!sidebar) {
            document.body.style.overflow = "hidden";
            setSideBar(true)
        }
        else {
            setSideBar(false)
            document.body.style.overflow = "auto";
        }
    }
    function SectionActive(section){
       setSectionActive(section);

    }

    useEffect(()=>{
         const menu=document.querySelectorAll(".menuLink");
   
    menu.forEach(link=>{
   
        const text=link.textContent;
        const restContent=text.slice(1);
        link.innerHTML=`<span class="first-letter">${text.charAt(0)}</span>${restContent}`

    })

    },[])
    //  useGSAP(()=>{
    //      gsap.from(".social-logo",{
    //         rotate:360,
    //         duration:2,
    //         delay:2,
    //      })   
    //     })

    return (
        <>
            <div className={`sidebar-container ${sidebar ? "active" : ""} `} >
                <div className="container-overlay" onClick={SideBarToogler}>
                    <div
                        className="custom-cursor"
                        style={{
                            left: cursor.x,
                            top: cursor.y
                        }}
                    >
                        <span>X</span>
                    </div>
                </div>
                <ul className={`menu ${sidebar ? "active" : ""}`}>
                    <div className="menuItem logo-container"> <img src="./LOGO.png"></img><XCircle onClick={SideBarToogler} color="var(--primary-color)" size={28}></XCircle></div>
                    <li className="menuItem"><a href="#home" className="menuLink ">Home</a></li>
                    <li className="menuItem"><a href="#service" className="menuLink">Services</a></li>
                    <li className="menuItem"><a href="#aboutme" className="menuLink">About me</a></li>
                    <li className="menuItem"><a href="#portfolio" className="menuLink">Portfolio</a></li>
                    <li className="menuItem"><a href="#contactme" className="menuLink">Contact me</a></li>

                    <li className="sidebar-button">

                        <PrimaryButton label={"Hire Me"} />
                    </li>

                </ul>
            </div>

            <div className={`nav-bar-container container-width ${showHeader ? "show" : ""}`} >
                <nav className="nav-bar container-width-wrap">
                    <div className="toogler"  onClick={SideBarToogler} >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 12H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 6H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 18H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>

                    <div className="logo">
                        <img src="./LOGO.png"></img>
                    </div>
                    <ul className="nav-list ">
                        <li className="list-item" onClick={()=>SectionActive("home")}><a href="#home" className= {`list-link ${sectionActive == "home"?"color":""}`}>Home</a></li>
                        <li className="list-item" onClick={()=>SectionActive("service")}><a href="#service" className={`list-link ${sectionActive == "service"?"color":""}`}>Services</a></li>
                        <li className="list-item" onClick={()=>SectionActive("aboutme")}><a href="#aboutme" className={`list-link ${sectionActive == "aboutme"?"color":""}`}>About me</a></li>
                        <li className="list-item" onClick={()=>SectionActive("portfolio")}><a href="#portfolio" className={`list-link ${sectionActive=="portfolio"?"color":""}`}>Portfolio</a></li>
                        <li className="list-item" onClick={()=>SectionActive("contactme")}><a href="#contactme" className={`list-link ${sectionActive=="contactme"?"color":""}`}>Contact me</a></li>

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
