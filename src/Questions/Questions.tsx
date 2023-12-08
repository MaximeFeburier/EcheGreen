import vrai from './../img/vrai.png';
import faux from './../img/faux.png';
import quizz from './../img/quiz.png';
import quiznoel from './../img/quiznoel.png';
import nextnoel from './../img/nextnoel.png';
import './Questions.scss';
import {Question} from "../App";
import {useEffect, useState} from "react";

type QuestionProps = {
    questions: Question[];
    removeQuestion: (questions: Question[], question: string) => void;
    setTextShowed: React.Dispatch<React.SetStateAction<string>>;
}
const Questions = ({questions, removeQuestion, setTextShowed}: QuestionProps) => {


    const [questionType, setQuestionType] = useState<Boolean>(false);
    const [question, setQuestion] = useState<Question>();
    const [showExplanation, setShowExplanation] = useState<Boolean>(false);
    const [goodAnswer, setGoodAnswer] = useState<Boolean>(false);
    const drawQuestion = (questions: Question[]): Question => {
        if (questions.length > 0) {
            const question = questions[Math.floor(Math.random() * questions.length)];
            setTextShowed(question?.text || '');
            removeQuestion(questions, question?.question);
            setQuestionType(question.options.length > 2);
            return question;
        }
        return {
            question: "Plus de question disponible",
            options: [""],
            response: "",
            explanation: ""
        }
    };

    const checkResponse = (response: boolean | string) => () => {
        if (typeof response === 'string') {
            setGoodAnswer(response === question?.response);
            setShowExplanation(true);
        } else {
            setGoodAnswer(response === (question?.response === 'Vrai'));
            setShowExplanation(true);
        }

    }

    useEffect(() => {
        setQuestion(drawQuestion(questions));
        removeQuestion(questions, question?.question || '');
    }, []);


    return (
        <div className='content'>
            {question && <div className={'card-container'}>
                <div className={'logo-container'}>
                    <img className='big-logo-question' src={quiznoel}/>
                </div>
                <div className={'question-container'}>
                    <h5>{question?.question}</h5>
                </div>
                {!showExplanation && questionType && question.question !== "Plus de question disponible" && question.options.map((elt) => {
                    return <div className={'small-logo-container'}>
                        <button className={'btn btn-danger sized-button'} onClick={checkResponse(elt)}>{elt}</button>
                    </div>
                })
                }
                {!showExplanation && <>
                    {!questionType && question.question !== "Plus de question disponible" && <>
                        <div className={'logo-container'}>
                            <img onClick={checkResponse(true)} className='logo-question' src={vrai}/>
                        </div>
                        <div className={'logo-container'}>
                            <img onClick={checkResponse(false)} className='logo-question' src={faux}/>
                        </div>
                    </>
                    }
                </>}
                {showExplanation && <>
                    <div className={'small-logo-container'}>
                        {question?.response}
                    </div>
                    <div className={'small-logo-container'}>
                        {question?.explanation}
                    </div>
                    <div className={'small-logo-container'}>
                        <img onClick={() => {
                            setQuestion(drawQuestion(questions));
                            setShowExplanation(false);
                        }} className='logo-question' src={nextnoel}/>
                    </div>
                </>
                }
            </div>}
        </div>
    )
}
export default Questions;