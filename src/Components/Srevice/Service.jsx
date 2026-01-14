import "./Service.css"
import { ServiceCard } from "../Cards/Cards"
export default function Service() {
    return (
        <>
            <div id="service" className="service-wrapper container-width">
                <div className="service ">

                    <div className="center">
                        <p className="service-text">Services</p>

                        <p className="service-text-color">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
                        </p>
                    </div>
                    <div className="card-wrap">
                        <ServiceCard/>
                        <ServiceCard/>
                        <ServiceCard/>
                        <ServiceCard/>
                        <ServiceCard/>
                        <ServiceCard/>  
                       
                    </div>
                </div>
            </div>

        </>
    )
}