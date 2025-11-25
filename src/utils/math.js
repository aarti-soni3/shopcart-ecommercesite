export const discountPriceFromPercentage = (price, discountPercentage) => {
  // Discounted Price = Original Value × (1 - (Discount % / 100))

  if (price && discountPercentage)
    return twoDecimalValue(price * (1 - discountPercentage / 100));
};

export const twoDecimalValue = (amount) => {
  if (isNaN(amount)) return "";
  return amount.toFixed(2);
};
