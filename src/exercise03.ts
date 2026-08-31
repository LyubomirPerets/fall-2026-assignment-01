export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  for (const [item, quantity, price] of inventory) {
    if (quantity < 0 || price < 0) {
      throw new Error(`Invalid quantity or price for item: ${item}`);
    }
  }
  let totalValue = 0;
  for (const [item, quantity, price] of inventory) {
    totalValue += quantity * price;
  }
  return totalValue;
}
