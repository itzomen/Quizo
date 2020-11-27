import Header from "./framework/Header";
import ApiConnect from "../api/ApiConnect";

export const SelectQuiz = () => {

const API_URL = "http://127.0.0.1:8000/quiz/";
const [dataState] = ApiConnect(API_URL);

console.log(dataState)

    return(
        <>
            <Header/>
        </>
    );
}

export default SelectQuiz