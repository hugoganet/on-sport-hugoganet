function filterActivities(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => (
    // validates all filter criteria
    filterKeys.every((key) => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find((filter) => filter === item[key]);
    })));
}

export default filterActivities;
