module.exports = {
  '==': (left, right) => left == right,
  '!=': (left, right) => left != right,
  '===': (left, right) => left === right,
  '!==': (left, right) => left !== right,
  '<': (left, right) => left < right,
  '<=': (left, right) => left <= right,
  '>': (left, right) => left > right,
  '>=': (left, right) => left >= right,
  '<<': (left, right) => left << right,
  '>>': (left, right) => left >> right,
  '>>>': (left, right) => left >>> right,
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
  '%': (left, right) => left % right,
  '|': (left, right) => left | right,
  '^': (left, right) => left ^ right,
  '&': (left, right) => left & right,
  'in': (left, right) => left in right,
  'instanceof': (left, right) => left instanceof right
}
