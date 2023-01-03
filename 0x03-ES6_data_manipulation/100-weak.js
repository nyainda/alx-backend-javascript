export const weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  const times = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, times + 1);
  if (weakMap.get(endpoint) >= 5) throw Error('Endpoint load is high');
};
