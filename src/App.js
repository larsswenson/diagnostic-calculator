import React, { useState } from 'react';
import './App.css';

function App() {
  const [prevalence, setPrevalence] = useState('');
  const [sensitivity, setSensitivity] = useState('');
  const [specificity, setSpecificity] = useState('');
  const [probPositive, setProbPositive] = useState(null);
  const [probNegative, setProbNegative] = useState(null);

  const handleCalculate = () => {
    const prevalenceNum = parseFloat(prevalence) / 100;
    const sensitivityNum = parseFloat(sensitivity) / 100;
    const specificityNum = parseFloat(specificity) / 100;

    const pDisease = prevalenceNum;
    const pNoDisease = 1 - pDisease;
    const pTestPositive = (sensitivityNum * pDisease) + ((1 - specificityNum) * pNoDisease);

    const pDiseaseGivenPositive = (sensitivityNum * pDisease) / pTestPositive;
    const pNoDiseaseGivenPositive = ((1 - specificityNum) * pNoDisease) / pTestPositive;

    setProbPositive(pDiseaseGivenPositive * 100);
    setProbNegative(pNoDiseaseGivenPositive * 100);
  };

  return (
    <div className="App">
      <h1>Diagnostic Calculator</h1>
      <div className="input-group">
        <label>
          Prevalence (%):
          <input
            type="number"
            value={prevalence}
            onChange={(e) => setPrevalence(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Sensitivity (%):
          <input
            type="number"
            value={sensitivity}
            onChange={(e) => setSensitivity(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Specificity (%):
          <input
            type="number"
            value={specificity}
            onChange={(e) => setSpecificity(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {probPositive !== null && probNegative !== null && (
        <div className="results">
          <p>Probability of disease given positive test: {probPositive.toFixed(2)}%</p>
          <p>Probability of no disease given negative test: {probNegative.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default App;


