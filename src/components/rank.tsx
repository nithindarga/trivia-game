import { SetStateAction } from "react";
import { Model } from "./model"
import { ModelHeader } from "./modelHeader"

interface RankProps{
    modalInfo: boolean
    setModalInfo: (value:SetStateAction<boolean>) => 
    void;

}


export function Rank ({
    modalInfo ,
    setModalInfo 
}: RankProps) {
    return (
        <Model isOpen={modalInfo} setIsOpen={setModalInfo}>
            <ModelHeader 
                title ={"Rank Details"} 
                onClose={() => setModalInfo(false)}
            />
            <div className="w-full flex flex-col items-center 
            gap-5">
                test 123
            </div>
        </Model>    
    )
}