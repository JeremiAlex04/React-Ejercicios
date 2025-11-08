import React, { useState } from "react"


function Contador() {
    const [contar, setContar] = useState(0);
    const [msj, setmsj] = useState("");

    const aumentar = () => {
        const aumen = contar + 1;
        
        setContar(aumen)
        setmsj("");
    }

    const disminuir = () => {
        const dism = contar - 1;
        setContar(dism);
    }
    
    const validar = () => {
        if(contar == 0){
           setmsj("No puedes bajar mas, Llegamos a 0");
        }else {
            disminuir()
        }
    }


    return (
        <>
        <h1 className="text-danger m-2">Contador</h1>
        <h2 className="m-2 justify-content-center">Valor: {contar}</h2>
        <button className="btn btn-outline-dark d-inline m-2" onClick={aumentar}>Aumentar</button>
        <button className="btn btn-outline-dark d-inline m-2" onClick={validar}>Disminuir</button>
        <p>Observacion: {msj}</p>
        </>
    )
}
export default Contador
