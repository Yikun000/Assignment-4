import React, { useState } from 'react';
import './NewtonsMethod.css';

const newtonsMethod = (g) => {
    const f = (x) => 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6;
    const fPrime = (x) => 24 * x ** 3 - 39 * x ** 2 - 36 * x + 7;
    let iterations = 0, maxIterations = 1000;
    while (Math.abs(f(g)) > 0.0001 && iterations < maxIterations) {
        g -= f(g) / fPrime(g);
        iterations++;
    }
    return g;
};

const NewtonsMethod = () => {
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');

    const calculate = () => {
        const parsedGuess = parseFloat(guess);
        if (isNaN(parsedGuess)) {
            setResult("Invalid input");
            return;
        }
        setResult(newtonsMethod(parsedGuess).toFixed(5));
    };

    return (
        <div>
            <h2>Newton's Method for Root Approximation</h2>
            <label>Initial Guess:</label>
            <input 
                type="number" 
                value={guess} 
                onChange={(e) => setGuess(e.target.value)} 
                placeholder="Enter initial guess" 
            />
            <button onClick={calculate}>Calculate</button>
            <label>Root Approximation Result:</label>
            <input 
                type="text" 
                value={result} 
                readOnly 
                placeholder="Result" 
            />
        </div>
    );
};

export default NewtonsMethod;
