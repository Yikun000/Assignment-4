import { useState } from "react";
import './AmbiguousCase.css';

const AmbiguousCase = () => {
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [angleA, setAngleA] = useState("");
    const [result, setResult] = useState("");

    const ambiguousCase = (a, b, A) => {
        const h = b * Math.sin(A * (Math.PI / 180));

        if (A > 0 && A <= 90) {
            if (h < a && a < b) {
                return "Two triangles (ambiguous case)";
            } else if (a === h) {
                return "Right triangle";
            } else if (a < h) {
                return "No triangle";
            } else {
                return "One triangle";
            }
        } else if (A < 180 && A > 90) {
            if (a < b || a === b) {
                return "No triangle";
            } else if (a > b) {
                return "One triangle";
            }
        } else {
            return "Invalid Angle";
        }
    };

    const handleCalculate = () => {
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const A = parseFloat(angleA);

        if (isNaN(a) || isNaN(b) || isNaN(A)) {
            setResult("Please fill in all fields correctly.");
            return;
        }

        setResult(ambiguousCase(a, b, A));
    };

    return (
        <div>
            <h2>Ambiguous Case Triangle Checker</h2>
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
                placeholder="Angle A (degrees)"
                value={angleA}
                onChange={(e) => setAngleA(e.target.value)}
            />
            <button onClick={handleCalculate}>Calculate</button>
            <input type="text" readOnly value={result} placeholder="Result" />
        </div>
    );
};

export default AmbiguousCase;
