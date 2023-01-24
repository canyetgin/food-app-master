import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updated = state.items.concat(action.item);
    const newTotal = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updated,
      totalAmount: newTotal,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addItem = (item) => {
    dispatchCart({ type: 'ADD_ITEM', item: item });
  };
  const removeItem = (item) => {
    dispatchCart({ type: 'REMOVE_ITEM', item: item });
  };
  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
