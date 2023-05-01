function sumCalculations(cartArr) {
  const totalPrice = calculateTotalPrice(cartArr);
  const vatCost = Math.floor(totalPrice * 0.2);
  const shippingCost = Math.ceil(totalPrice * 0.01);
  const grandTotal = totalPrice + shippingCost;

  return {totalPrice, vatCost, shippingCost, grandTotal};
}

function calculateTotalPrice(cartArr) {
  return cartArr.reduce((total, { price, quantity }) => {
    const multiply = price * quantity;
    return total = total + multiply;
  }, 0);
}

export default sumCalculations;