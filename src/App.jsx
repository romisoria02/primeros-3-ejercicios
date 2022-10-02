import PrimerSaludo from "./components/PrimerSaludo";

// 3-Modificar el programa anterior agregando al componente un state con la clave msj: “(from changed state)”, además agregar un botón al presionar este botón (onClick), el state de la clave msj se debe mostrar por pantalla 

function App() {
  const saludo = 'my friend'
  
  return (
    <PrimerSaludo codigoSaludo={saludo}></PrimerSaludo>
  );
}

export default App;
