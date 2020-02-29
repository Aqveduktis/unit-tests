export const findIndex = (array, value) => {
  if (array.includes(value)) {
    const index = array.findIndex(fruit => fruit === value);
    return index

  }
  else {
    return -1
  }

}
