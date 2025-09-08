import React, { useState, useEffect } from 'react';

const ProductForm = ({ addProducto, productoEditando, updateProducto }) => {

  // Estado para los inputs del formulario
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');

  // ✅ useEffect va aquí, dentro del componente, pero fuera de cualquier otra función
  useEffect(() => {
    if (productoEditando) {
      setNombre(productoEditando.nombre);
      setDescripcion(productoEditando.descripcion);
      setPrecio(productoEditando.precio);
      setCantidad(productoEditando.cantidad);
    }
  }, [productoEditando]); // Solo se ejecuta cuando productoEditando cambia

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear nuevo producto
    const nuevoProducto = {
      id: productoEditando ? productoEditando.id : Date.now(),
      nombre,
      descripcion,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad),
      fechaCreacion: productoEditando ? productoEditando.fechaCreacion : new Date().toISOString().split('T')[0]
    };

    if (productoEditando) {
      updateProducto(nuevoProducto);
    } else {
      addProducto(nuevoProducto);
    }

    // Limpiar formulario
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setCantidad('');
  };

  return (
    <div className="container mt-4">
      <h2>{productoEditando ? "Editar Producto" : "Agregar Producto"}</h2>
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
        <button type="submit" className="btn btn-primary">{productoEditando ? "Guardar cambios" : "Agregar producto"}</button>
      </form>
    </div>
  );

};

export default ProductForm;
