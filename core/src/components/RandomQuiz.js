import { useParams } from "react-router-dom";
import ApiConnect from "../api/ApiConnect";



export const RandomQuiz = () =>{
const { topic } = useParams();

const API_URL = "http://localhost:8000/quiz/r/" + topic;
const [dataState] = ApiConnect(API_URL);

console.log(topic)
console.log(dataState)
return (
    <></>
)

}

export default RandomQuiz;