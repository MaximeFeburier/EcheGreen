import {useState} from "react";
import startnoel from '../img/startnoel.png';
import start from '../img/start.png';
import './HomeScreen.scss'

type HomeScreenProps = {
    next: boolean;
    setNext: React.Dispatch<React.SetStateAction<Boolean>>;
    setTheme: React.Dispatch<React.SetStateAction<Boolean>>;
    theme: Boolean;
}

export const HomeScreen = ({next, setNext, theme, setTheme}: HomeScreenProps) => {
    const [speed, setSpeed] = useState<number>(0);
    return (
        <div className="homescreen_container">
            <header className="App-header">
                <div className='content'>
                    <div className={'btn-container'}>
                        <img className={'start-button'} src={theme ? start : startnoel} onClick={() => setNext(!next)}/>
                    </div>
                    <div className={'btn-container'}>
                        <button className={'btn btn-primary my-2'} onClick={() => setTheme(!theme)}>Change Theme
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomeScreen;