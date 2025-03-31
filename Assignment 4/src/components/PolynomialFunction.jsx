import React, { useState } from 'react';
import './PolynomialFunction.css';

const polynomialFunctionAndEvaluation = (coefficients, exponents, x) => {
    let polynomialStr = coefficients.map((coef, i) => {
        if (exponents[i] === undefined) return ''; 
        const sign = coef < 0 ? ' - ' : i === 0 ? '' : ' + ';
        return `${sign}${Math.abs(coef)}x^${exponents[i]}`;
    }).join('');

    let evaluation = coefficients.reduce((sum, coef, i) => 
        sum + (exponents[i] !== undefined ? coef * x ** exponents[i] : 0), 0
    );

    return [polynomialStr, evaluation.toFixed(1)];
};

const PolynomialFunction = () => {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [xValue, setXValue] = useState('');
    const [polynomialStr, setPolynomialStr] = useState('');
    const [evaluation, setEvaluation] = useState('');

    const calculate = () => {
        const coefArray = coefficients.trim().split(/\s+/).map(Number);
        const expArray = exponents.trim().split(/\s+/).map(Number);
        const x = parseFloat(xValue);

        if (coefArray.length !== expArray.length) {
            alert("Error: Coefficients and exponents must have the same number of values.");
            return;
        }

        const [polyStr, evalResult] = polynomialFunctionAndEvaluation(coefArray, expArray, x);
        setPolynomialStr(polyStr);
        setEvaluation(evalResult);
    };

    return (
        <div>
            <h2>Polynomial Function and Evaluation</h2>
            <label>Coefficients (space-separated):</label>
            <input 
                type="text" 
                value={coefficients} 
                onChange={(e) => setCoefficients(e.target.value)} 
                placeholder="e.g. 3 -2 1" 
            />
            <label>Exponents (space-separated):</label>
            <input 
                type="text" 
                value={exponents} 
                onChange={(e) => setExponents(e.target.value)} 
                placeholder="e.g. 2 1 0" 
            />
            <label>X Value:</label>
            <input 
                type="number" 
                value={xValue} 
                onChange={(e) => setXValue(e.target.value)} 
                placeholder="Enter x" 
            />
            <button onClick={calculate}>Calculate</button>
            <label>Polynomial Function:</label>
            <input 
                type="text" 
                value={polynomialStr} 
                readOnly 
                placeholder="Result" 
            />
            <label>Evaluation Result:</label>
            <input 
                type="text" 
                value={evaluation} 
                readOnly 
                placeholder="Evaluation" 
            />
        </div>
    );
};

export default PolynomialFunction;