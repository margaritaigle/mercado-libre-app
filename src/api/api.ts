export const fetchData = async (path: string) => {
  const response = await fetch(`https://api.mercadolibre.com/${path}`);
  const data = response.json();
  return data;
};
