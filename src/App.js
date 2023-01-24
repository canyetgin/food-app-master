import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [shown, setShown] = useState(false);

  const show = () => {
    setShown(true);
  };
  const hide = () => {
    setShown(false);
  };
  return (
    <CartProvider>
      <Fragment>
        {shown && <Cart onClose={hide} />}
        <Header onShow={show} />
        <main>
          <Meals />
        </main>
      </Fragment>
    </CartProvider>
  );
}

export default App;
