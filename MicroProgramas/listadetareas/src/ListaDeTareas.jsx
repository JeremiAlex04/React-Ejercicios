import { useState } from "react";

function ListaDeTareas() {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    // Manejar el texto que el usuario escriba en el input
    const manejarCambio = (e) => {
        setTarea(e.target.value);
    }

    const agregarTarea = () => {
        if (tarea.trim() !== "") {
            setTareas([...tareas, tarea]);
            setTarea("");
        }
    }

    const eliminar = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    }

    // Manejar la tecla Enter para agregar tarea
    const manejarKeyPress = (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h2 className="mb-0">LISTA DE TAREAS</h2>
                        </div>
                        <div className="card-body">
                            {/* Sección de Input */}
                            <div className="mb-3">
                                <label htmlFor="tareaInput" className="form-label">Ingresa una tarea:</label>
                                <div className="input-group">
                                    <input
                                        id="tareaInput"
                                        type="text"
                                        className="form-control"
                                        placeholder="Ej: Comprar leche..."
                                        value={tarea}
                                        onChange={manejarCambio}
                                        onKeyPress={manejarKeyPress}
                                    />
                                    <button 
                                        className="btn btn-primary" 
                                        type="button" 
                                        onClick={agregarTarea}
                                    >
                                        <i className="bi bi-plus-lg"></i> Agregar
                                    </button>
                                </div>
                            </div>

                            <hr className="my-4" />

                            {/* Sección de Resultados */}
                            <h4 className="mb-3 text-secondary">Tareas Pendientes:</h4>
                            <div>
                                {tareas.length === 0 ? (
                                    <div className="alert alert-info text-center" role="alert">
                                        No hay tareas registradas. ¡Agrega una!
                                    </div>
                                ) : (
                                    <ul className="list-group">
                                        {tareas.map((t, index) => (
                                            <li 
                                                key={index} 
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                <span className="text-break me-2">{t}</span>
                                                <button 
                                                    className="btn btn-outline-danger btn-sm" 
                                                    onClick={() => eliminar(index)}
                                                    title="Eliminar tarea"
                                                >
                                                    Eliminar
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        {/* Pie de tarjeta opcional para mostrar contador */}
                        {tareas.length > 0 && (
                            <div className="card-footer text-muted text-end">
                                {tareas.length} {tareas.length === 1 ? 'tarea' : 'tareas'} en total
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaDeTareas;