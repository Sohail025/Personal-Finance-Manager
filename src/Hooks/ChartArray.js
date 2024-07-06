export const ChartArray = (currMonth) => {
  const rawData = Array.from({ length: currMonth + 1 }, (_, i) => {
    return 0;
  });
  return [rawData];
};
