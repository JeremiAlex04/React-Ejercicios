import { useState } from "react";

function ListaDeTareas() {

    const [task, setTask] = useState(""); // Tarea Actual
    const [tasks, setTasks] = useState([]); //Lista de tareas

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div className="container mt-5 bg-body-secondary">
            <h2 className="text-center mb-3">Lista de Tareas</h2>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nueva tarea" onChange={(e) => setTask(e.target.value)}></input>
                <button className="btn btn-primary" onClick={addTask}>Agregar</button>
            </div>

            <ul className="list-group">
                {tasks.map((t, i) => (
                    <li key={i} className="list-group-item d-flex justify-content-between">{t}
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTask(i)}>Eliminar</button>
                    </li>
                ))};
            </ul>

        </div>
    );
}

export default ListaDeTareas