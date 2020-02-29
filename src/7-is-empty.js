export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    if (stringArrayOrObject === '') {
      return true
    }
    else {
      return false
    }
  }

  else if (type === 'object') {
    if (stringArrayOrObject == {} || stringArrayOrObject == [] || stringArrayOrObject == null) {
      return true
    }
    else {
      return false
    }
  }
  else if (type === 'array') {
    if (stringArrayOrObject == null) {
      return true
    }
    else {
      return false
    }
  }

}


