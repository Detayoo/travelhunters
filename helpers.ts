export const formatMoney = (text: any): string => {
  return Intl.NumberFormat("NGN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(text));
};
