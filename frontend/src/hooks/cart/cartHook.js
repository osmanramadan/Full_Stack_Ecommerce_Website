import { useState, useEffect } from 'react';

function CartHook() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart([...updatedCart]);
    localStorage.setItem('cart', JSON.stringify([...updatedCart]));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.priceafterdiscount * item.qut,
    0,
  );

  return [cart, addToCart, removeFromCart, cartTotal];
}

export default CartHook;
