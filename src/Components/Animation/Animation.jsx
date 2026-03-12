import { useGSAP } from "@gsap/react"
import gsap, { random } from "gsap"
import "./Animation.css"
import { useRef, useState } from "react"

export default function () {
    useGSAP(() => {
        gsap.from(".square", {
            x: -500,
            opacity: 0,
            rotate: 720,
            duration: 2,
            delay: 0.5

        })
    })
    //all the 3 method work same
    const boxRef = useRef()
    useGSAP(() => {
        gsap.from(boxRef.current, {
            rotate: 360,
            scale: 0,
            opacity: 0,
            delay: 1,
            duration: 1
        })
    })
    //instead of ref use scope
    useGSAP(()=>{
        gsap.from(".square2",{
            scale:1.2,
            delay:1,
            duration:1
        })

    },{scope:".animation2"})
    //combination of ref and scope 
    const boxRef2 = useRef()
    useGSAP(()=>
     {
        gsap.from(".square1",{
             scale:1.2,
            delay:1,
            duration:1
        })
    },{scope:boxRef2})
    //button animation
    const [circle,setCircle]=useState(0);
    const random = gsap.utils.random(-500,500,100)
    useGSAP(()=>{
        gsap.to(".circle1",{
            x:circle,
            duration:0.5
        })
    },[circle])



    return (
        <>
            <div className="animation1">
                <div className="box">
                    <div className="circle"></div>
                    <div className="square"></div>
                </div>
                <div className="box">
                    <div className="circle"></div>
                    <div className="square"></div>
                </div>

            </div>
            <div className="animation2">

                <div className="box">
                    <div className="circle1"></div>
                    <div className="square2"></div>
                </div>
                <div className="box">
                    <div className="circle"></div>
                    <div ref={boxRef} className="square1"></div>
                </div>
                <div className="box" ref={boxRef2}>
                    <div className="circle"></div>
                    <div  className="square1"></div>
                </div>
            </div>
            <div className="animation2">

            <button className="button" onClick={()=>{
                // console.log('helo')
                setCircle(random)
            }}>Move</button>
            </div>
            

        </>
    )
}