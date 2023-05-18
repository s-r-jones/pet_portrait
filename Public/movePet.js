// -----JS CODE-----


//@input Component.ScreenTransform petImageTransform
/** @type {ScreenTransform} */
var petImageTransform = script.petImageTransform;

script.api.moveY = function (data) {
  let offset = remap(data, 0, 1, -10, 10)
  petImageTransform.offsets.bottom = offset;
  petImageTransform.offsets.top = offset;
}

script.api.moveX = function (data) {
  let offset = remap(data, 0, 1, -5, 5)
  petImageTransform.offsets.left = offset;
  petImageTransform.offsets.right = offset;
}

/**
* Returns the input value remapped from the input range to the output range
* @param {number} value Value in
* @param {number} inMin Input range minimum
* @param {number} inMax Input range maximum
* @param {number} outMax Output range minimum
* @param {number} outMin Output range maximum
* @returns {number} `value` remapped from the input range to the output range
*/
function remap(value, inMin, inMax, outMin, outMax) {
  return outMin + (value - inMin) * (outMax - outMin) / (inMax - inMin);
}