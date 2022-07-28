export function formatMoney(value: number) {
  return value.toLocaleString("pt-PT", {
    minimumFractionDigits: 2,
  });
}
