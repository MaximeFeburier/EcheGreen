import React from 'react';
import './App.css';
import img from './img/earth.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={img} className="App-logo" alt="logo"/>
                <p>
                    Hello Word
                </p>
            </header>
        </div>
    );
}

export default App;
