import {useState} from "react";
import startnoel from '../img/startnoel.png';
import start from '../img/start.png';
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
                    <div className={'btn-container'}>
                        <img className={'start-button'} src={theme ? start : startnoel} onClick={() => setNext(!next)}/>
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