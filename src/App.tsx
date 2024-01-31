import { useState } from "react"
function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, seResultado] = useState('');

const calculaImc = () => {
  const imc = altura / (peso * altura);
  const fomrmatImc = imc.toFixed(2)
  seResultado(+fomrmatImc)
}
  return (
    <>
     <div className="container">
     <div className="App">
        <h1>Calculadora de IMC</h1>
        <div>
          <label>Altura (cm): </label>
          <input type="number"  onChange={(e) => setAltura(+e.target.value)} />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input type="number"  onChange={(e) => setPeso(+e.target.value)} />
        </div>
        <button onClick={calculaImc}>Calcular IMC</button>
      </div>
      {resultado}
     </div>
      
    </>
  )
}

export default App
