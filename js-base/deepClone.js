function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  result = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
