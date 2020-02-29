export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  let boll = "try1"

  if (type === 'string') {
    if (stringArrayOrObject === '') {
      boll = true
    }
    else {
      boll = false
    }
  }


  else if (type === 'object') {
    let text = ''
    try {
      text = Object.keys(stringArrayOrObject)
    }
    catch (err) {
      text = stringArrayOrObject.toString()
    }
    finally {
      text = text.toString()
      if (text === '') {
        boll = true
      }
      else {
        boll = false
      }
    }

  }
  return boll

}


