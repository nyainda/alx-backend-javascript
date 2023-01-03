const cleanSet = (set, starString) => {
  if (typeof set !== 'object') return '';
  if (typeof starString !== 'string') return '';
  if (starString.length === 0) return '';

  const temporalArray = Array.from(set);
  const filteredArray = temporalArray.filter(
    (el) => el !== undefined && el.startsWith(starString),
  );
  return filteredArray.map((element) => element.replace(starString, '')).join('-');
};
export default cleanSet;
