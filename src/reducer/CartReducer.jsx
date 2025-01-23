import { useReducer } from "react";

const initialState = { cart: [], total: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "updateCart": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const newCount = (existingItem.count || 1) + action.payload.count;
        if (newCount <= 0) {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
        }
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, count: newCount } : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }],
      };
    }

    case "getTotal": {
      const newTotal = state.cart.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
      return {
        ...state,
        total: newTotal > 100 ? newTotal * 0.9 : newTotal,
      };
    }

    case "delete":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const useCartReducer = () => useReducer(reducer, initialState);

export default useCartReducer;
