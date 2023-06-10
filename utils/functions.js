module.exports = function isEmpty (value) {
    return (
      // null or undefined
      (value == null) ||
      (value == 'undefined') ||
  
      // has length and it's zero
      (value.hasOwnProperty('length') && value.length === 0) ||
  
      // is an Object and has no keys
      (value.constructor === Object && Object.keys(value).length === 0)
    )
  }
  