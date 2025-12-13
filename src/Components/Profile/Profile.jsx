import "./Profile.css"
import { PortfolioCard } from "../Cards/Cards"
export default function Profile() {
    return (
        <>
            <div className="portfolio-wrap">
                <div className="portfolio-container">
                    <div className="center">
                        <p className="service-text">Portfolio</p>

                        <div className="portfolio-btns">
                            <button className="portfolio-btn color">All</button>
                            <button className="portfolio-btn">Website Design</button>
                            <button className="portfolio-btn">App Mobile Design</button>
                            <button className="portfolio-btn">App Desktop</button>
                            <button className="portfolio-btn">Braiding</button>
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