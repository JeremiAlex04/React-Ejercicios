import { useState } from "react";

function Formulario() {
    
    const [form, setForm] = useState({nombre: "", email: "", password:""});
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!form.nombre || !form.email || !form.password){
            setError("Todos los campos son obligatorios");
        } else {
            setError("");
            alert("Registro exitoso");
            form.nombre = "";
            form.email = "";
            form.password = "";
        }
    };

    return (
        <>
        <div className="container mt-5 col-md-6">
            <h2 className="text-center mb-3">Registro de Usuarios</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" placeholder="Nombre" name="nombre" value={form.nombre} onChange={handleChange}></input>
                <input className="form-control mb-3" placeholder="Email" name="email" value={form.email} onChange={handleChange}></input>
                <input className="form-control mb-3" placeholder="Password" name="password" value={form.password} onChange={handleChange}></input>
                {error && <div className="alert alert-danger">{error}</div>}
                <button className="btn btn-primary w-100">Registrar</button>
            </form>
        </div>
        </>
    );
}

export default Formulario