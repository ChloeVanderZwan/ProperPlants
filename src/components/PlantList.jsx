import Plant from "./Plant";

function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list">
      <h2>Available Plants</h2>
      <div className="plants-grid">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default PlantList;
