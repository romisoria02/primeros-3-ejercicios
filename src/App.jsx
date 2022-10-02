import PrimerSaludo from "./components/PrimerSaludo";

// 2-Modificar el componente anterior y enviar mediante props el valor “My friend” de manera que el mensaje quede de la siguiente forma
function App() {
  const saludo = 'my friend'
  
  return (
    <PrimerSaludo codigoSaludo={saludo}></PrimerSaludo>
  );
}

export default App;
