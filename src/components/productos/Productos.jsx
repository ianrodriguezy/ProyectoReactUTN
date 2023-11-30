import "./productos.css";
import { useFetch } from "../../useFetch";
import { Link } from "react-router-dom";

const Productos = () => {
  const { data } = useFetch("/src/products.json");

  console.log(data);
  return (
    <div className="product-container">
      {data?.map((product) => (
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
            <Link to={`/producto/${product.id}`}>
              <button>Añadir al carrito</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productos;
