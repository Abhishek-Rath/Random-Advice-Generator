import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [advice, setAdvice] = useState('');

    const fetchAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data.slip.advice);
            setAdvice(data.slip.advice);
        } catch(err) {
            console.log('Could not get advice: '+ err);
        }
    }

    useEffect(() => {
        // console.log('Some random quote');
        fetchAdvice();
    }, []);

    return (
        <div className='app'>
            <div className='advice-card'>
                <h1 className="advice">{ advice }</h1>
                <button className="button" onClick={ fetchAdvice }>
                    <span>Give me some advice!</span>
                </button>
            </div>
        </div>
    );
}

export default App;
