import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItem = (item) => {};
  const removeItem = (item) => {};
  const context = {
    items: [],
    totalAmount: 0,
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
