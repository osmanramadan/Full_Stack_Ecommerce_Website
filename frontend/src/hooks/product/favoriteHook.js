import { useState, useEffect } from 'react';

function useFavoriteProducts() {
  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteProducts');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  const addFavoriteProduct = (product) => {
    if (!favoriteProducts.find((favorite) => favorite.id === product.id)) {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  const removeFavoriteProduct = (productId) => {
    const updatedFavorites = favoriteProducts.filter(
      (favorite) => favorite.id === productId,
    );
    setFavoriteProducts(updatedFavorites);
  };

  const isFavorite = (product) => {
    return favoriteProducts.find((favorite) => favorite.id === product.id);
  };

  return [
    favoriteProducts,
    addFavoriteProduct,
    removeFavoriteProduct,
    isFavorite,
  ];
}

export default useFavoriteProducts;
