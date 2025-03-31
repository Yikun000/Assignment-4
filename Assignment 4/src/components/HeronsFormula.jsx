import React, { useState } from 'react';
import './HeronsFormula.css';

const HeronsFormula = () => {
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [sideC, setSideC] = useState("");
    const [result, setResult] = useState("");

    const heronsFormula = (a, b, c) => {
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    };

    const handleCalculate = () => {
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = parseFloat(sideC);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            setResult("Invalid input");
            return;
        }

        setResult(heronsFormula(a, b, c));
    };

    return (
        <div>
            <h2>Heron's Formula Calculator</h2>
            <input
                type="number"
                placeholder="Side A"
                value={sideA}
                onChange={(e) => setSideA(e.target.value)}
            />
            <input
                type="number"
                placeholder="Side B"
                value={sideB}
                onChange={(e) => setSideB(e.target.value)}
            />
            <input
                type="number"
                placeholder="Side C"
                value={sideC}
                onChange={(e) => setSideC(e.target.value)}
            />
            <button onClick={handleCalculate}>Calculate</button>
            <input type="text" readOnly value={result} placeholder="Result" />
        </div>
    );
};

export default HeronsFormula;
