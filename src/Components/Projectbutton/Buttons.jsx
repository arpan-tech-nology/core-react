import "./Buttons.css"

function PrimaryButton({label ,icon}){
    return(
        <>
        <button className="primary-btn">{icon?icon:""}{label}</button>
        </>
    )

}

function SecondaryButton({label}){
    return(
        <>
     <button className="secondary-btn">{label}</button>
        </>
    )
}
export {PrimaryButton , SecondaryButton}