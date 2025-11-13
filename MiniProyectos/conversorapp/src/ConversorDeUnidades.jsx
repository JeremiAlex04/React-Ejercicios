import React, { useState, useEffect, useRef } from "react";

function ConversorDeUnidades() {
    // useState: Guarda los valores del usuario
    const [valor, setValor] = useState(""); // valor a convertir
    const [resultado, setResultado] = useState(""); // resultado convertido
    const [unidadOrigen, setUnidadOrigen] = useState("metros"); // unidad de origen
    const [unidadDestino, setUnidadDestino] = useState("kilometros"); // unidad destino
    const [historial, setHistorial] = useState([]); // historial de conversiones

    // useRef: referencia al input para poder enfocarlo o intercambiar unidades
    const inputRef = useRef(null);

    // Función para realizar la conversión (muy simple, solo ejemplo)
    const convertir = () => {
        let valorNum = parseFloat(valor);
        if (isNaN(valorNum)) {
            setResultado("Ingrese un número válido");
            return;
        }

        let resultadoFinal = 0;

        // Conversión simple entre metros y kilómetros
        if (unidadOrigen === "metros" && unidadDestino === "kilometros") {
            resultadoFinal = valorNum / 1000;
        } else if (unidadOrigen === "kilometros" && unidadDestino === "metros") {
            resultadoFinal = valorNum * 1000;
        }
        // Conversión entre grados
        else if (unidadOrigen === "celsius" && unidadDestino === "fahrenheit") {
            resultadoFinal = (valorNum * 9) / 5 + 32;
        } else if (unidadOrigen === "fahrenheit" && unidadDestino === "celsius") {
            resultadoFinal = ((valorNum - 32) * 5) / 9;
        }
        // Peso
        else if (unidadOrigen === "kilogramos" && unidadDestino === "gramos") {
            resultadoFinal = valorNum * 1000;
        } else if (unidadOrigen === "gramos" && unidadDestino === "kilogramos") {
            resultadoFinal = valorNum / 1000;
        } else {
            resultadoFinal = valorNum; // mismas unidades
        }

        setResultado(resultadoFinal);
        setHistorial([
            ...historial,
            `${valorNum} ${unidadOrigen} = ${resultadoFinal} ${unidadDestino}`,
        ]);
    };

    // useEffect: Se ejecuta automáticamente cada vez que cambian las unidades o el valor
    useEffect(() => {
        if (valor !== "") convertir();
    }, [valor, unidadOrigen, unidadDestino]);

    // Intercambiar unidades usando useRef
    const intercambiarUnidades = () => {
        const temp = unidadOrigen;
        setUnidadOrigen(unidadDestino);
        setUnidadDestino(temp);
        inputRef.current.focus(); // enfocar el input después de intercambiar
    };


    return (
        <div className="container mt-5 p-4 border rounded shadow-sm bg-light">
            <h2 className="text-center mb-4 text-primary">Conversor de Unidades Universal</h2>

            {/* Campo de entrada */}
            <div className="mb-3">
                <label className="form-label">Valor a convertir:</label>
                <input
                    ref={inputRef}
                    type="number"
                    className="form-control"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="Ingrese un número"
                />
            </div>

            {/* Selección de unidades */}
            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Unidad origen:</label>
                    <select
                        className="form-select"
                        value={unidadOrigen}
                        onChange={(e) => setUnidadOrigen(e.target.value)}
                    >
                        <option value="metros">Metros</option>
                        <option value="kilometros">Kilómetros</option>
                        <option value="celsius">Celsius</option>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kilogramos">Kilogramos</option>
                        <option value="gramos">Gramos</option>
                    </select>
                </div>

                <div className="col d-flex align-items-end justify-content-center">
                    <button onClick={intercambiarUnidades} className="btn btn-outline-primary mt-3">
                    Intercambiar
                    </button>
                </div>

                <div className="col">
                    <label className="form-label">Unidad destino:</label>
                    <select
                        className="form-select"
                        value={unidadDestino}
                        onChange={(e) => setUnidadDestino(e.target.value)}
                    >
                        <option value="metros">Metros</option>
                        <option value="kilometros">Kilómetros</option>
                        <option value="celsius">Celsius</option>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kilogramos">Kilogramos</option>
                        <option value="gramos">Gramos</option>
                    </select>
                </div>
            </div>

            {/* Resultado */}
            <div className="alert alert-info text-center">
                <strong>Resultado:</strong> {resultado}
            </div>

            {/* Historial */}
            <h5 className="mt-4">Historial de conversiones:</h5>
            <ul className="list-group">
                {historial.length === 0 ? (
                    <li className="list-group-item text-muted">No hay conversiones aún</li>
                ) : (
                    historial.map((item, index) => (
                        <li key={index} className="list-group-item">
                            {item}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default ConversorDeUnidades;
