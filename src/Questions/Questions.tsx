import vrai from './../img/vrai.png';
import faux from './../img/faux.png';
import quizz from './../img/quiz.png';
import earthvalidation from './../img/earthvalidation.png';
import './Questions.css';
import {Question} from "../App";

type QuestionProps = {
    questions: Question[];
    removeQuestion: (questions: Question[], question: string) => void;
}
const Questions = ({questions, removeQuestion}: QuestionProps) => {
    return (
        <div className='content'>
            <div className={'card-container'}>
                <div className={'logo-container'}>
                    <img className='logo-question' src={quizz}/>
                </div>
                <div className={'logo-container'}>
                    <img className='logo-question' src={vrai}/>
                </div>
                <div className={'logo-container'}>
                    <img className='logo-question' src={faux}/>
                </div>
                <div className={'small-logo-container'}>
                    <img className='small-logo-question' src={earthvalidation}/>
                </div>
            </div>
        </div>
    )
}
export default Questions;