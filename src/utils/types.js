export function isString (obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isHtmlElement (node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

export const isFunction = (functionToCheck) => {
  var getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

/*  eslint-disable */
export const isUndefined = (val) => {
  return val === void 0
}
/* eslint-enabel */
export const isDefined = (val) => {
  return val !== undefined && val !== null
}
