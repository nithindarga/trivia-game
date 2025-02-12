import Lottie from "lottie-react"
import lottieOpen from "./assets/lotties/triviaopening.json"
import { useEffect, useState } from "react"
import lottieGo from "./assets/lotties/triviaGO.json"
import lottieThinking from "./assets/lotties/triviathink.json"
import { IoSettingsOutline } from "react-icons/io5";
import { PiRanking } from "react-icons/pi"
import { Settings } from "./components/settings"


function App() {
  

  const [stepPage, setstepPage] = useState(1)
  const [modalInfo, setmodalInfo] = useState(false)

  useEffect(() => {
    const text = document.querySelector(".typing-text")

    if (text){
      const letters = text.textContent?.split("");

      text.textContent= "";

      letters?.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0"
        : letter;
        span.style.animationDelay = `${index * 0.03}s`;
        span.classList.add("fade-in");
        text.appendChild(span);

      });
    }
  }, [])

  const handleStep = () =>{
    setstepPage(stepPage + 1);
  };


  const handlemodalInfo = () =>{
    setmodalInfo(true);

  };

  return (
    <div className="min-h-screen flex w-full items-center justify-center text-center
    bg-gradient-to-r from-blue-900 to to-blue-600 
    relative">
      



        {
          stepPage === 1 &&(
            <div>
              <Lottie animationData={lottieOpen} loop={true}
              className="w-96"/>


              <div className="text-3xl font-bold text-center flex 
                flex-col justify-center items-center curser-pointer" onClick=
                {handleStep}>
                <span className="typing-text text-white">
                Let's play a Trivia Game?!
                </span>
                <Lottie animationData={lottieGo} 
                loop ={true} className="w-28"/>
              </div>
            </div>
            


        )}  

        {
          stepPage === 2 && (
            <>
            <div className="absolute w-full top-4 
            flex flex-row items-center justify-between px-6
            text-white">
              <div className="flex flex-col justify-center items-center gap-1
              cursor-pointer">
                <PiRanking size ={30} 
                />
                <div>Rank</div>
              
              </div>
              <div className="flex flex-col justify-center items-center gap-1
              cursor-pointer " onClick={handlemodalInfo}> 
                <IoSettingsOutline size ={30} 
                />
                <div>Settings</div>
              </div>
            

            </div>
            <div className="cursor-pointer">
              <Lottie animationData={lottieThinking} loop={true}
              className="w-96"/>
              <div className="text-3xl font-bold text-white">Click to start</div>
            </div>
            </>
          )
        }
    
    <Settings modalInfo ={modalInfo} setModalInfo={setmodalInfo}/>
    </div>    
  )
}

export default App
