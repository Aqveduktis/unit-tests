export const hackerSpeak = (words) => {
  // "should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5"
  let newWords = words.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0').replace(/s/gi, '5')

  return newWords
}
