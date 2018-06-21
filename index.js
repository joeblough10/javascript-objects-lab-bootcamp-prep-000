

var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object)
    return delete clone.key
}

function destructivelyDeleteFromObjectByKey (object, key){
<<<<<<< HEAD
  delete object[key];
=======
  delete object.key;
>>>>>>> 6e2a744637d95de4184f24a81a1cad3fb170df03
    return object;
}



