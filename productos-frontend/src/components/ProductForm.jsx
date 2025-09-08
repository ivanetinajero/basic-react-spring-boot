import React, { useState } from 'react';

const ProductForm = ({ addProducto }) => {

  // Estado para los inputs del formulario
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear nuevo producto
    const nuevoProducto = {
      id: Date.now(), // id único temporal
      nombre,
      descripcion,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad),
      fechaCreacion: new Date().toISOString().split('T')[0]
    };

    // Llamamos a la función pasada desde el padre
    addProducto(nuevoProducto);

    // Limpiar formulario
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setCantidad('');
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" step="0.01" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input type="number" className="form-control" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Producto</button>
      </form>
    </div>
  );
  
};

export default ProductForm;
