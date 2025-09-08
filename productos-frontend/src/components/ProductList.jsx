import React, { useState } from 'react';
import ProductForm from './ProductForm';

const ProductList = () => {

    // Datos hardcodeados
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Laptop', descripcion: 'Laptop HP con 16GB RAM', precio: 1500, cantidad: 10, fechaCreacion: '2025-09-07' },
        { id: 2, nombre: 'Mouse', descripcion: 'Mouse Logitech inalámbrico', precio: 30, cantidad: 50, fechaCreacion: '2025-09-05' }
    ]);

    // Función para agregar producto
    const addProducto = (nuevoProducto) => {
        setProductos([...productos, nuevoProducto]);
    };

    // Función para eliminar un producto
    const deleteProducto = (id) => {
        // Filtramos los productos que no tengan el id que queremos eliminar
        setProductos(productos.filter(producto => producto.id !== id));
    };

    const [productoEditando, setProductoEditando] = useState(null);

    const updateProducto = (productoActualizado) => {
        setProductos(
            productos.map((p) =>
                p.id === productoActualizado.id ? productoActualizado : p
            )
        );
        setProductoEditando(null); // Limpiamos el producto en edición
    };

    return (
        <div className="container mt-4">

            <ProductForm
                addProducto={addProducto}
                productoEditando={productoEditando}
                updateProducto={updateProducto}
            />

            <h2 className="mt-5">Listado de Productos</h2>
            <table className="table table-striped table-hover mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Fecha Creación</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.fechaCreacion}</td>
                            <td><button className="btn btn-warning btn-sm" onClick={() => setProductoEditando(producto)}>Editar</button></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => deleteProducto(producto.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
