import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import CartContainer from './components/CartContainer';

import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';

const App = () => {
  const { cartItems } = useSelector((store) => store.cart);

  const { isModalOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);
  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;


