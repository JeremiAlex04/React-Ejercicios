import { useState } from "react";


function Contador() {
    /*Declaramos una variable de estado llamado "Count" 
    y una funcion para actualizaria "setCount"
    */

    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Contador: {count}</h2> {/*Mostrar el calor actual del estado*/}
            {/*Ejecuta setcount para aumentar el contador*/}
            <button className="text-bg-primary m-3" onClick={()=> setCount(count+1)}> +1</button>
            {/*Ejecuta setcount para disminuir el contador*/}
            <button className="text-bg-info m-3" onClick={()=> setCount(count-1)}>-1</button>
        </>
    )

}
export default Contador