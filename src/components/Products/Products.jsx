import { useCartContext } from "../../context/CartContext";
import { productsData } from "./productsData";

const Products = () => {
  const [state, dispatch] = useCartContext();

  return (
    <>
      <h1 className="font-extrabold">Produits</h1>
      <ul className="border border-white rounded-md p-2 flex flex-wrap justify-center gap-4 m-4">
        {productsData.map((product) => (
          <li key={product.id} className="flex flex-col gap-2 items-center">
            <p className="text-2xl font-bold mb-2">{product.name}</p>

            <img
              src={product.imgSrc}
              alt={product.name}
              className="rounded-md"
            />

            <p>Prix : {product.price}€</p>

            <button
              onClick={() => {
                dispatch({
                  type: "updateCart",
                  payload: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    imgSrc: product.imgSrc,
                    count: 1,
                  },
                });
                dispatch({ type: "getTotal" });
              }}
            >
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
