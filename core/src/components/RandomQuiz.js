import React, { useState, useEffect } from "react"
import Header from "./framework/Header";
import Footer from "./framework/Footer"
import { useParams } from "react-router-dom";
import ApiConnect from "../api/ApiConnect";

// MaterialUI
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  correct: {
    color: "blue",
  },
}));



export const RandomQuiz = () =>{
const classes = useStyles();
const { topic } = useParams();

const API_URL = "http://localhost:8000/quiz/r/" + topic;
const [dataState] = ApiConnect(API_URL);

//console.log(dataState)
const a = dataState.data.flatMap((q) => q.answer);
//console.log(a)
const count = a.length
const [answer, setAnswer] = useState({});
//answerState
const [answerCheck, setAnswerCheck] = useState();

    useEffect(() => {
        if (Object.keys(answer).length === 0) {
            setAnswer(createInitalAnswers());
        }
    }, [answer]);

    
    const handleSelection = (e) => {
        setAnswer({ ...answer, [e.target.value]: e.target.checked});
    }

    const createInitalAnswers = () => {
        let z = a.flatMap((obj) => obj.id);
        var object = {};
        for (var x = 0; x < count; x++) {
          object[z[x]] = false;
        }
        return object;
    };
    //console.log(answer)

    const checkAnswer = (e) => {
        e.preventDefault();

        //output answers bolean
        let n = a.map((obj) => obj.is_right);
        //y arranging answers in the format {0:false,1:true...}
        let y = { ...n};
        //view answers
        //console.log(answer)

        function arrayEquals(o, p) {
            return (
              Array.isArray(o) &&
              Array.isArray(p) &&
              o.length === p.length &&
              o.every((val, index) => val === p[index])
            );
        }

        let o = Object.values(y);
        let p = Object.values(answer);
        if (arrayEquals(o, p)) {
            setAnswerCheck(true);
        } else {
            setAnswerCheck(false);
        }

    }

    


return (
    <React.Fragment>
        <Header/>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                {dataState.data.map(({ title, answer }, i) => (
                    <div key={i}>
                    <Typography component="h1" variant="h5">
                        {title}
                    </Typography>
                    {answer.map(({ answer_text, id }) => (
                        <RadioGroup>
                        <FormControlLabel
                            control={
                            <Checkbox
                                value={id}
                                color="primary"
                                onChange={handleSelection}
                            />
                            }
                            label={answer_text}
                        />
                        </RadioGroup>
                    ))}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={checkAnswer}
                    >
                        Submit Answer
                    </Button>
                    
                    </div>
                ))}
                </div>
            </Container>
        <Footer/>
    </React.Fragment>
);

};

export default RandomQuiz;