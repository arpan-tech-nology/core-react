import "./Buttons.css"

function PrimaryButton({label ,icon ,...rest}){
    return(
        <>
        <button className="primary-btn" {...rest}>{icon?icon:""}{label}</button>
        </>
    )

}

function SecondaryButton({label,...rest}){
    return(
        <>
     <button className="secondary-btn" {...rest}>{label}</button>
        </>
    )
}
export {PrimaryButton , SecondaryButton}