import React, { useState, useEffect, useRef } from "react";

function RegistroAsistencia() {

    // useState: registros, hora actual y nombre del empleado
    const [empleado, setEmpleado] = useState("");
    const [registros, setRegistros] = useState([]);
    const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString());

    // useRef: para el reloj
    const relojRef = useRef(null);

    // useEffect: actualiza la hora cada segundo
    useEffect(() => {
        relojRef.current = setInterval(() => {
            setHoraActual(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(relojRef.current);
    }, []);

    // Función para marcar entrada
    const marcarEntrada = () => {
        if (empleado.trim() === "") {
            alert("Por favor, ingresa el nombre del empleado.");
            return;
        }

        // Verificamos si el empleado ya tiene un registro
        const existe = registros.find((r) => r.nombre === empleado);

        if (existe) {
            alert("Este empleado ya marcó entrada. Puedes marcar salida.");
        } else {
            const nuevo = {
                nombre: empleado,
                entrada: new Date().toLocaleTimeString(),
                salida: "", // aún no ha salido
            };
            setRegistros([...registros, nuevo]);
        }
    };

    // Función para marcar salida
    const marcarSalida = () => {
        if (empleado.trim() === "") {
            alert("Por favor, ingresa el nombre del empleado.");
            return;
        }

        const nuevosRegistros = registros.map((r) => {
            if (r.nombre === empleado && r.salida === "") {
                return { ...r, salida: new Date().toLocaleTimeString() };
            }
            return r;
        });

        setRegistros(nuevosRegistros);
    };

    return (
        <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center text-primary mb-4">
          Registro de Asistencia
        </h2>

        {/* Reloj */}
        <div className="text-center mb-3">
          <h4>Hora actual: {horaActual}</h4>
        </div>

        {/* Nombre del empleado */}
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre del empleado:</label>
          <input
            type="text"
            className="form-control"
            value={empleado}
            onChange={(e) => setEmpleado(e.target.value)}
            placeholder="Ejemplo: Fernando López"
          />
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <button className="btn btn-success" onClick={marcarEntrada}>
            Marcar Entrada
          </button>
          <button className="btn btn-danger" onClick={marcarSalida}>
            Marcar Salida
          </button>
        </div>

        {/* Tabla de registros */}
        <h5 className="text-secondary">Registros del día:</h5>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Empleado</th>
              <th>Hora de Entrada</th>
              <th>Hora de Salida</th>
            </tr>
          </thead>
          <tbody>
            {registros.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-muted">
                  Aún no hay registros
                </td>
              </tr>
            ) : (
              registros.map((r, i) => (
                <tr key={i}>
                  <td>{r.nombre}</td>
                  <td>{r.entrada}</td>
                  <td>{r.salida || "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default RegistroAsistencia;
