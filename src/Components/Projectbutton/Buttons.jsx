import "./Buttons.css"

function PrimaryButton({label ,icon ,...rest}){
    return(
        <>
        <button className="primary-btn" {...rest}>
            <div className="animation">
                <span className="effect">{label}{icon?icon:""}</span>
                <span className="effect">{label}{icon?icon:""}</span>

            </div>
        </button>
        </>
    )

}

function SecondaryButton({label,...rest}){
    return(
        <>
     <button className="secondary-btn" {...rest}>
         <div className="animation">
                <span className="effect">{label}</span>
                <span className="effect">{label}</span>
            </div>
     </button>
        </>
    )
}
export {PrimaryButton , SecondaryButton}
