export const hashtags = (text) => {
  const anArr = text.split(' ')
  const newArr = anArr.filter((item) => {
    return (item[0] === '#')
  })
  return newArr
}
