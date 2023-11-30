const ProductDetail = (product) => {
  return (
    <div className="product" key={product.id}>
    <div>
      <h3>{product.name}</h3>
      <img src={product.images} />
    </div>
    <div>
      <p>{product.description}</p>
    </div>
    <div>
      <p className="price">Precio: ${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  </div>
  )
}

export default ProductDetail