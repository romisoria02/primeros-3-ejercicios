import { useState } from "react";

const PrimerSaludo = (props) => {
    const [clave, setclave] = useState('');

    const mostrar = () => {
        setclave('(from changed state)')
}

    return (
        <div>
          <h1>Hello {props.codigoSaludo} {clave}</h1>
    <button onClick={mostrar}>Mostrar Clave</button>
    </div>  
    );
};

export default PrimerSaludo;