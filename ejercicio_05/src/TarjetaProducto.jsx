import laptop from '../src/assets/img/LaptopHp.jpg'
import mouse from '../src/assets/img/MouseLogitech.jpg'
import teclado from '../src/assets/img/TecladoMecanico.jpg'


function TarjetaProducto() {
    const productos = [
        {id:1, nombre: "Laptop HP", precio: 2500, imagen: laptop},
        {id:2, nombre: "Laptop HP", precio: 120, imagen: mouse},
        {id:3, nombre: "Laptop HP", precio: 350, imagen: teclado}
    ];
    
    return (
        <>
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>Productos</h2>
            <div className='row'>
                {productos.map((p)=>(
                    <div className='col-md-4 mb-3' key={p.id}>
                        <div className='card'>
                            <img src={p.imagen} className='card-img-top' alt={p.nombre}></img>
                            <div className='card-body text-center'>
                                <h5 className='card-title'>{p.nombre}</h5>
                                <p className='card-text'>S/ {p.precio}</p>
                                <button className='btn btn-success'>Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </>
    )
}

export default TarjetaProducto