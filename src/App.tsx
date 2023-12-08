import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeScreen from "./HomeScreen/HomeScreen";
import Questions from "./Questions/Questions";
import forest from './img/forest.png';
import tree from './img/tree.png';
import trees from './img/trees.png';
import trees2 from './img/2trees.png';
import cows from './img/cows.png';
import waterfall from './img/waterfall.png';
import camping from './img/camping.png';
import mountain from './img/mountain.png';


export type Question = {
    question: string;
    options: string[];
    response: string;
    explanation: string;
    text?: string;
}

function App() {
    const [next, setNext] = useState<Boolean>(false);

    const removeQuestion = (questions: Question[], question: string) => {
        questions.forEach(elt => {
            if (elt.question === question) {
                questions.splice(questions.indexOf(elt), 1);
                setQuestions(questions);
            }
        });
    }

    const [textShowed, setTextShowed] = useState<string>('');
    const [theme, setTheme] = useState<Boolean>(false);
    const [questions, setQuestions] = React.useState<Question[]>([
        {
            "question": "Vrai ou Faux : Planter des arbres est la solution la plus efficace pour lutter contre le changement climatique.",
            "options": ["Vrai", "Faux"],
            "response": "Faux",
            "explanation": "Bien que bénéfique, la plantation d'arbres ne suffit pas à contrebalancer les émissions de gaz à effet de serre dues à la combustion d'énergies fossiles et autres pratiques industrielles. Des mesures plus directes comme la transition vers les énergies renouvelables sont nécessaires."
            , "text": "Déconstruction pédagogique :\n" +
                "Bien que la plantation d'arbres soit une action positive pour l'environnement, elle ne constitue pas une solution complète au changement climatique. Les arbres absorbent le dioxyde de carbone (CO2), un gaz à effet de serre, mais cette absorption est limitée par plusieurs facteurs :\n" +
                "\n" +
                "La Maturité des Arbres : Les jeunes arbres absorbent moins de CO2 que les arbres matures.\n" +
                "La Durabilité : Les arbres doivent être maintenus pendant de nombreuses années pour avoir un impact significatif.\n" +
                "Le Besoin de Solutions Globales : La réduction des émissions de gaz à effet de serre nécessite une approche globale, incluant le passage aux énergies renouvelables et l'amélioration de l'efficacité énergétique."
        },
        {
            "question": "Quelle est la principale source d'émissions de gaz à effet de serre ?",
            "options": ["Les transports", "L'agriculture", "La production d'électricité", "Les industries manufacturières"],
            "response": "La production d'électricité",
            "explanation": "La production d'électricité, surtout à partir de combustibles fossiles, est une des principales sources d'émissions de CO2. Réduire ces émissions, notamment via les énergies renouvelables, est crucial pour le climat."
            , "text": "La production d'électricité n'est pas un contributeur majeur au changement climatique.\n" +
                "Déconstruction pédagogique :\n" +
                "La production d'électricité, surtout celle provenant de la combustion de combustibles fossiles comme le charbon, le pétrole et le gaz naturel, est l'une des principales sources d'émissions de CO2. Ces émissions contribuent considérablement à l'effet de serre et au réchauffement climatique. Pour réduire ces émissions, il est essentiel de :\n" +
                "\n" +
                "Adopter des Énergies Renouvelables : Comme l'énergie solaire, éolienne, et hydraulique.\n" +
                "Améliorer l'Efficacité Énergétique : Réduire la consommation d'énergie dans les industries, les bâtiments et les transports."
        },
        {
            "question": "Vrai ou Faux : L'utilisation de biocarburants est toujours une solution écologique pour remplacer les carburants fossiles.",
            "options": ["Vrai", "Faux"],
            "response": "Faux",
            "explanation": "Les biocarburants peuvent réduire la dépendance aux fossiles, mais leur production n'est pas toujours écologique, pouvant entraîner déforestation et consommation excessive d'énergie."
            , "text": "Les biocarburants sont toujours une alternative écologique aux carburants fossiles.\n" +
                "Déconstruction pédagogique :\n" +
                "Bien que les biocarburants puissent réduire la dépendance aux carburants fossiles, leur production n'est pas nécessairement écologique :\n" +
                "\n" +
                "Impact sur l'Environnement : La production de biocarburants peut entraîner la déforestation et l'utilisation excessive d'eau et d'énergie.\n" +
                "Bilan Carbone : Dans certains cas, le cycle de vie complet des biocarburants (de la culture à la combustion) peut émettre autant de gaz à effet de serre que les combustibles fossiles."
        },
        {
            "question": "Quelle technologie est la plus prometteuse pour capturer le CO2 de l'atmosphère ?",
            "options": ["La reforestation", "La technologie de capture et de stockage du carbone", "L'agriculture biologique", "Les panneaux solaires"],
            "response": "La technologie de capture et de stockage du carbone",
            "explanation": "La capture et le stockage du carbone (CCS) sont prometteurs pour réduire les concentrations de CO2, en capturant le CO2 des centrales et industries avant qu'il ne s'échappe dans l'atmosphère."
            ,
            "text": "Seules les méthodes naturelles, comme la reforestation, peuvent efficacement capturer le CO2.\n" +
                "Déconstruction pédagogique :\n" +
                "Bien que la reforestation soit une méthode importante, la technologie de capture et de stockage du carbone (CCS) est également prometteuse. Elle implique :\n" +
                "\n" +
                "Capturer le CO2 : Directement à la source, comme les centrales électriques ou les industries.\n" +
                "Stocker le CO2 : Dans des réservoirs géologiques souterrains pour éviter sa libération dans l'atmosphère."
        },
        {
            "question": "Vrai ou Faux : Réduire sa consommation de viande n'a aucun impact significatif sur les émissions de gaz à effet de serre.",
            "options": ["Vrai", "Faux"],
            "response": "Faux",
            "explanation": "Réduire la consommation de viande, en particulier de bœuf, peut significativement diminuer les émissions de méthane et réduire la pression sur les ressources naturelles et la biodiversité."
            , "text": "Réduire la consommation de viande n'impacte pas le changement climatique.\n" +
                "Déconstruction pédagogique :\n" +
                "La production de viande, en particulier le bœuf, est une source importante d'émissions de méthane, un gaz à effet de serre puissant. Réduire la consommation de viande peut avoir un impact significatif :\n" +
                "\n" +
                "Réduction des Émissions de Méthane : Surtout dans l'élevage bovin.\n" +
                "Utilisation des Terres : Moins de terres sont nécessaires pour les cultures destinées à l'alimentation humaine directe, réduisant la déforestation."
        }
    ]);

    return (
        <>
            {!theme && <div className="snow_wrap">
                <div className="snow"></div>
            </div>}
            {theme && <div className="main-theme-background"></div>}
            <div className="main-container">
                {textShowed.length > 0 && <div className="text-block">
                    <div className="text">{textShowed}</div>
                </div>}
                <div className="quizz-part">
                    {next ? <Questions theme={theme} setTextShowed={setTextShowed} questions={questions}
                                       removeQuestion={removeQuestion}/> : <>
                        <HomeScreen theme={theme} setTheme={setTheme} next={next} setNext={setNext}/>
                    </>}
                </div>
            </div>
            {!theme && <div className="container-trees">
                <div className="contain">
                    <img className="tree3" src={trees} alt="Tree 3"/>
                    <img className="tree1" src={tree} alt="Tree 1"/>
                    <img className="tree2" src={trees2} alt="Tree 2"/>
                    <img className="forest" src={forest} alt="Forest"/>
                </div>
            </div>}
            {theme && <div className="container-trees justify-content-between">
                <img className="sized_img tree3" src={waterfall}/>
                <img className="sized_img tree1" src={camping}/>
                <img className="sized_img runner" src={cows}/>
                <img className="sized_img mountain" src={mountain}/>
            </div>
            }
        </>
    )
        ;
}

export default App;
