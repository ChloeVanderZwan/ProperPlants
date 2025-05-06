function CartItem({ item, updateQuantity }) {
  return (
    <div className="cart-item">
      <div className="cart-item-emoji">{item.emoji}</div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
