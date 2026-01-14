import "./Skill.css"
export default function Skill({ image, percentage, label }) {
    return (
        <>
    

            <div className="about-me-social-icon">
                <div className="round" style={{ "--percentage": percentage }}   >
                <div className="skill-icon">
                    {image}
                </div>
                </div>

                <p className="margin-0 persantage">{percentage}%</p>
                <p className="margin-0 persentage-text">{label}</p>
            </div>
        </>
    )
}