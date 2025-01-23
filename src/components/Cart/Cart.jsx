import { BiTrash } from "react-icons/bi";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const [state, dispatch] = useCartContext();
  return (
    <>
      <h1 className="font-extrabold my-6">Panier</h1>

      {state.cart.length > 0 ? (
        <div className="border border-white rounded-md p-2 flex flex-col justify-center gap-4 m-4 w-[600px] mx-auto">
          <ul className="flex flex-col gap-4">
            {state.cart.map((product) => (
              <li
                key={product.id}
                className="flex justify-center items-center gap-1"
              >
                <p>{product.name}</p>
                <img
                  className="w-15 rounded-md"
                  src={product.imgSrc}
                  alt={product.name}
                />
                <p>{product.price}€ | </p>
                <p>x{product.count}</p>

                <button
                  onClick={() => {
                    dispatch({
                      type: "removeOne",
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
                  -
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "addToCart",
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
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "delete", payload: product.id });
                    dispatch({ type: "getTotal" });
                  }}
                >
                  <BiTrash />
                </button>
              </li>
            ))}
          </ul>
          {state.total > 100 && <p>Reduction de 10% sur le prix total !</p>}
          <p>TOTAL : {state.total}€</p>
        </div>
      ) : (
        <p className="border border-white rounded-md w-fit mx-auto px-10 py-2">
          Le panier est vide...
        </p>
      )}
    </>
  );
};

export default Cart;
