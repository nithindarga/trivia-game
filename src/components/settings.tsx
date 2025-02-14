import { SetStateAction} from "react"
import { Model } from "./model"
import { ModelHeader } from "./modelHeader"
import { categories } from "../utils/categories"


type SettingsProps = {
    modalInfo: boolean
    setModalInfo: (value:SetStateAction<boolean>) => void;
        category: number;
        setCategory:(value:SetStateAction<number>) => void;
        numberOfQuestions: number;
        setNumberOfQuestions:(value:SetStateAction<number>) => void;
        difficulty : string;
        setDifficulty: (value:SetStateAction<string>) => void;
        type : string;
        setType: (value:SetStateAction<string>) => void;
}

export const Settings = ({ modalInfo ,
    setModalInfo ,
    category,
    setCategory,
    numberOfQuestions,
    setNumberOfQuestions,
    difficulty,
    setDifficulty,
    type,
    setType,
}: SettingsProps) => {
    

    const totalOfQuestions = [5,10,15,20];
    const difficulties =["Easy", "Medium", "Hard"]

    //to make first letter capital on the select bar strings or anything
    const capitalizeFirstLetter = (string: string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const SaveSettings = () =>{
        setModalInfo(false);
    }
    
    return (
        <Model isOpen={modalInfo}
        setIsOpen={setModalInfo}>
            <ModelHeader title ={"Game Settings"} onClose={() =>
                setModalInfo(false)}/>
                <div className="w-full flex flex-col items-center gap-5">
                    <label className="w-full">
                        <span className="block mb-2 text-gray-700 ">
                            Category
                        </span>
                        <select 
                            value={category} 
                            onChange={(e) => setCategory(Number(e.
                            target.value))}
                            className="w-full p-2 border
                            border-gray-300 rounded-md"
                            >
                            {categories.map(category =>(
                                <option key={category.id} value=
                                {category.id}>
                                    {category.name}
                                </option>
                            ))}

                        </select>
                    </label>
                    <label className="w-full">
                        <span className="block mb-2 text-gray-700">
                            Number Of Questions
                        </span>
                        <select 
                            value={numberOfQuestions} 
                            onChange={(e) => setNumberOfQuestions(Number(e.
                            target.value))}
                            className="w-full p-2 border
                            border-gray-300 rounded-md"
                            >
                            {
                                totalOfQuestions.map((count) => (
                                    <option value={count} key={count}>
                                    {count}</option>
                                ))
                            }
                            

                        </select>
                    </label>
                    <label className="w-full">
                        <span className="block mb-2 text-gray-700">
                            Difficulty
                        </span>
                        <select 
                            value={difficulty} 
                            onChange={(e) => setDifficulty(e.
                            target.value)}
                            className="w-full p-2 border
                            border-gray-300 rounded-md"
                            >
                            {
                                difficulties.map((difficulty) => (
                                    <option value={difficulty} key={difficulty}>
                                    {capitalizeFirstLetter(difficulty)}
                                    </option>
                                ))
                            }
                            

                        </select>
                    </label>
                    <label className="w-full">
                        <span className="block mb-2 text-gray-700">
                            Type of Difficulty
                        </span>
                        <select 
                            value={type} 
                            onChange={(e) => setType(e.
                            target.value)}
                            className="w-full p-2 border
                            border-gray-300 rounded-md"
                            >
                            <option value={"any"}>
                                Any
                            </option>
                            <option value={"multiple"}>
                                Multiple Choice
                            </option>
                            <option value={"boolean"}>
                                True or False
                            </option>
                            

                        </select>
                    </label>

                    <button className="bg-blue-500 w-full py-2 rounded-lg text-white
                    hover:bg-blue-800 " onClick={SaveSettings}>
                        Save Settings
                    </button>

                </div>
        
            
        </Model>
    )
}