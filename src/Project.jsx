import "./App.css"
import ProjectHeader from "./Components/ProjectHeader/Header"
import HeroSection from "./Components/Herosection/Herosection"
import Service from "./Components/Srevice/Service"
import AboutMe from "./Components/Projectaboutme/About"
import Profile from "./Components/Profile/Profile"
import ContactMe from "./Components/ContactMe/Contact"
import Footer from "./Components/Footer/Footer"
export default function Project() {
    return (
        <>
            <div className="body">
                <ProjectHeader />
                <HeroSection />
                <Service />
                <AboutMe />
                <Profile />
                <ContactMe />
            </div>
        
                <Footer />
       
        </>
    )
}