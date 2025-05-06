function Plant({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-emoji">{plant.emoji}</div>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}

export default Plant;
