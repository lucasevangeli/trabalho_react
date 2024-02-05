import { useState } from "react";
import './App.css';

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [classificacao, setClassificacao] = useState("");

  const calculaImc = () => {
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    let classificacaoImc;

    if (imc < 18.5) {
      classificacaoImc = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacaoImc = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacaoImc = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      classificacaoImc = "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.9) {
      classificacaoImc = "Obesidade grau II";
    } else {
      classificacaoImc = "Obesidade grau III";
    }

    setResultado(imcFormatado);
    setClassificacao(classificacaoImc);
  };

  return (
    <>
      <div className="container">
        <h1>Calculadora de IMC</h1>
        <div className="App">
          <div>
            <label>Altura (cm): </label>
            <input
              type="number"
              onChange={(e) => setAltura(parseFloat(e.target.value) / 100)}
            />
          </div>
          <div>
            <label>Peso (kg): </label>
            <input
              type="number"
              onChange={(e) => setPeso(parseFloat(e.target.value))}
            />
          </div>
          <button onClick={calculaImc}>Calcular IMC</button>
        </div>
        <div className="resultado">
          <p>IMC: {resultado}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      </div>
    </>
  );
}

export default App;

