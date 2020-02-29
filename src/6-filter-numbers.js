export const filterNumbers = (array, largerThan) => {
  const newArray = array.filter((item) => {
    return (item <= largerThan)
  })
  return newArray
}
