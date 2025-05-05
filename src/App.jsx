import { useState } from "react";
import { plants } from "./data";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === plant.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentCart, { ...plant, quantity: 1 }];
    });
  };

  const updateQuantity = (plantId, change) => {
    setCart((currentCart) => {
      const updatedCart = currentCart
        .map((item) => {
          if (item.id === plantId) {
            const newQuantity = item.quantity + change;
            if (newQuantity <= 0) return null;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean);

      return updatedCart;
    });
  };

  return (
    <div className="app">
      <h1>Proper Plants</h1>
      <div className="main-content">
        <PlantList plants={plants} addToCart={addToCart} />
        <Cart cart={cart} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

export default App;
