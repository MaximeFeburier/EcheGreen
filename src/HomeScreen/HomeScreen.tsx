import {useState} from "react";
import earth from '../img/earth.png';
import tower from '../img/tower.png';
import './HomeScreen.scss'


export const HomeScreen = ({next, setNext}: {
    next: boolean, setNext: React.Dispatch<
        React.SetStateAction<Boolean>>
}) => {
    const [theme, setTheme] = useState<Boolean>(false);
    const [speed, setSpeed] = useState<number>(0);
    return (
        <div className="homescreen_container">
            <header className="App-header">
                <div className='content'>
                    <img src={theme ? tower : earth} className="App-logo" alt="logo"/>
                    <h1>
                        {theme ? "Bonsoir Paris" : "EcheGreen"}
                    </h1>
                    <div className={'btn-container'}>
                        <button className={'btn btn-primary'} onClick={() => setNext(!next)}>Start</button>
                    </div>
                    <div className={'btn-container'}>
                        <button className={'btn btn-warning my-2'} onClick={() => setTheme(!theme)}>Change Theme
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomeScreen;