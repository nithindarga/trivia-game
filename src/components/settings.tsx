import { SetStateAction} from "react"
import { Model } from "./model"
import { ModelHeader } from "./modelHeader"

type SettingsProps = {
    modalInfo: boolean
    setModalInfo: (value:
        SetStateAction<boolean>) => void
}

export const Settings = ({
    modalInfo,
    setModalInfo

}: SettingsProps) => {
    
    return (
        <Model isOpen={modalInfo}
        setIsOpen={setModalInfo}>
            <ModelHeader title ={"Game Settings"} onClose={() =>
                setModalInfo(false)}/>
                <div>test</div>
        
            
        </Model>
    )
}