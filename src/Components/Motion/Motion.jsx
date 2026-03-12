import * as motion from "motion/react-client"
import { useState } from "react"
// import "./Animation.css"
const box={
     width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}
export default function Motion(){
    const [isVisible, setIsVisible] = useState(true)


    return(<>
    {/* <motion.div
    style={box}
    whileHover={{rotate:360}}
    transition={{duration:1}}
    /> */
    <motion.div
    className="square"
    whileHover={{rotate:360}}
    transition={{duration:1}}
    />
    
    }
     <div className="animation1">
                <div className="box">
                    <motion.div className="circle" whileHover={{scale:1.1} }transition={{duration:1}}/>
                    <motion.div className="square" initial={{x:-500, opacity:0} }  animate={{ x:0 ,rotate:720 ,opacity:1}} transition={{duration:2}} />
                </div>
                
                {/* <div className="box">
                    <div className="circle"></div>
                    <div className="square"></div>
                </div> */}

            </div>
            <div className="animation2">
                {
                    isVisible?
                    <motion.div
                    className="square"
                        // initial={{ x:900 }}
                        animate={{ x:0}}
                        // transition={{duration:1}}
                        abc={123}
                        />
                    : <motion.div
                    className="round"
                        // initial={{ x:500}}
                        animate={{ x:500}}
                        // transition={{duration:1}}
                    abc={325}
                        />
                }

            <motion.button className="button" onClick={()=>{
                 setIsVisible(!isVisible)
            }}>Show  </motion.button>
            </div>

              <div className="animation2">
                {
                    // isVisible?
                    <motion.div
                    className="square"
                        // initial={{ x:900 }}
                        animate={{ x:isVisible?0:500}}
                        // transition={{duration:1}}
                        abc={123}
                        />
                    
                }

            <motion.button className="button" onClick={()=>{
                 setIsVisible(!isVisible)
            }}>Show  </motion.button>
            </div>
            


            
    

    </>)
}