import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeScreen from "./HomeScreen/HomeScreen";
import Questions from "./Questions/Questions";
import forest from './img/forest.png';
import tree from './img/tree.png';
import trees from './img/trees.png';
import trees2 from './img/2trees.png';

export type Question = {
    question: string;
    options: string[];
    response: string;
    explanation: string;
}

function App() {
    const [next, setNext] = useState<Boolean>(false);

    const removeQuestion = (questions: Question[], question: string) => {
        questions.forEach(elt => {
            if (elt.question === question) {
                questions.splice(questions.indexOf(elt), 1);
            }
        });
    }

    const [questions, setQuestions] = React.useState<Question[]>([
        {
            "question": "Vrai ou Faux : Planter des arbres est la solution la plus efficace pour lutter contre le changement climatique.",
            "options": ["Vrai", "Faux"],
            "response": "Faux",
            "explanation": "Bien que bénéfique, la plantation d'arbres ne suffit pas à contrebalancer les émissions de gaz à effet de serre dues à la combustion d'énergies fossiles et autres pratiques industrielles. Des mesures plus directes comme la transition vers les énergies renouvelables sont nécessaires."
        },
        {
            "question": "Quelle est la principale source d'émissions de gaz à effet de serre ?",
            "options": ["Les transports", "L'agriculture", "La production d'électricité", "Les industries manufacturières"],
            "response": "La production d'électricité",
            "explanation": "La production d'électricité, surtout à partir de combustibles fossiles, est une des principales sources d'émissions de CO2. Réduire ces émissions, notamment via les énergies renouvelables, est crucial pour le climat."
        },
        {
            "question": "Vrai ou Faux : L'utilisation de biocarburants est toujours une solution écologique pour remplacer les carburants fossiles.",
            "options": ["Vrai", "Faux"],
            "response": "Faux",
            "explanation": "Les biocarburants peuvent réduire la dépendance aux fossiles, mais leur production n'est pas toujours écologique, pouvant entraîner déforestation et consommation excessive d'énergie."
        },
        {
            "question": "Quelle technologie est la plus prometteuse pour capturer le CO2 de l'atmosphère ?",
            "options": ["La reforestation", "La technologie de capture et de stockage du carbone", "L'agriculture biologique", "Les panneaux solaires"],
            "response": "La technologie de capture et de stockage du carbone",
            "explanation": "La capture et le stockage du carbone (CCS) sont prometteurs pour réduire les concentrations de CO2, en capturant le CO2 des centrales et industries avant qu'il ne s'échappe dans l'atmosphère."
        },
        {
            "question": "Vrai ou Faux : Réduire sa consommation de viande n'a aucun impact significatif sur les émissions de gaz à effet de serre.",
            "options": ["Vrai", "Faux"],
            "response": "Faux",
            "explanation": "Réduire la consommation de viande, en particulier de bœuf, peut significativement diminuer les émissions de méthane et réduire la pression sur les ressources naturelles et la biodiversité."
        }
    ]);

    return (
        <div className="App">
            <div className={'snow'}></div>
            {next ? <Questions questions={questions} removeQuestion={removeQuestion}/> : <>
                <HomeScreen next={next} setNext={setNext}/>
                <footer className="container">
                    <div className="contain">
                        <img className="tree3" src={trees}/>
                        <img className="tree1" src={tree}/>
                        <img className="tree2" src={trees2}/>
                        <img className="forest" src={forest}/>
                    </div>
                </footer>
            </>}
        </div>
    );
}

export default App;
