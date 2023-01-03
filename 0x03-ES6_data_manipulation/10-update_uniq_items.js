const updateUniqueItems = (incomingMap) => {
  if (!(incomingMap instanceof Map)) throw new Error('Cannot process');
  incomingMap.forEach((value, key) => {
    if (value === 1) incomingMap.set(key, 100);
  });
};
export default updateUniqueItems;
