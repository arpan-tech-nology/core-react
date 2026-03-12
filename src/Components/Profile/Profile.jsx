import "./Profile.css"
import { PortfolioCard } from "../Cards/Cards"
export default function Profile() {
    return (
        <>
            <div id="portfolio" className="portfolio-wrap container-width">
                <div className="portfolio-container">
                    <div className="center">
                        <p className="service-text">Portfolio</p>

                        <div className="portfolio-btns">
                            <button className="portfolio-btn color">
                             <div className=" animation">
                <span className="effect">All</span>
                <span className="effect">All</span>
            </div>
                </button>
                            <button className="portfolio-btn"> <div className=" animation">
                <span className="effect">Website Design </span>
                <span className="effect">Website Design </span>
            </div></button>
                            <button className="portfolio-btn"> <div className=" animation">
                <span className="effect">App Mobile Design</span>
                <span className="effect">App Mobile Design</span>
            </div></button>
                            <button className="portfolio-btn"><div className=" animation">
                <span className="effect">App Desktop</span>
                <span className="effect">App Desktop</span>
            </div></button>
                            <button className="portfolio-btn"> <div className=" animation">
                <span className="effect">Braiding</span>
                <span className="effect">Braiding</span>
            </div></button>
                        </div>
                    </div>
                    <div className="portfolio-card-wrap">
            <PortfolioCard
            image="image1.png"
            title="Name Project"
            category="Catrgories"
            />
             <PortfolioCard
            image="image2.png"
            title="Name Project"
            category="Catrgories"
            />
             <PortfolioCard
            image="image3.png"
            title="Name Project"
            category="Catrgories"
            />
             <PortfolioCard
            image="image2.png"
            title="Name Project"
            category="Catrgories"
            />
             <PortfolioCard
            image="image1.png"
            title="Name Project"
            category="Catrgories"
            />
             <PortfolioCard
            image="image3.png"
            title="Name Project"
            category="Catrgories"
            />
            <PortfolioCard
            image="image1.png"
            title="Name Project"
            category="Catrgories"
            />
            <PortfolioCard
            image="image3.png"
            title="Name Project"
            category="Catrgories"
            />
            <PortfolioCard
            image="image2.png"
            title="Name Project"
            category="Catrgories"
            />
                    </div>
                </div>
            </div>
        </>
    )
}