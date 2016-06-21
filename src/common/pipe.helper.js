/**
 * Creates new function from functions passed as arguments. This function operates as fallow:
 * First argument passed to returned function is used as argument for first function in array.
 * Second function takes as argument result of first function and so on.
 * Result is value returned by last function.
 *
 * For example:
 * const addOneAndMultipleBy2 = pipe(
 *  (x) => x + 1,
 *  (x) => x* 2
 * );
 *
 * addOneAndMultipleBy2(3) // 8
 *
 * @param functions array of functions used to create new piped function
 * @returns {function()}
 */
export default (...functions) => {
  return (arg) => {
    return functions.reduce((arg, func) => func(arg), arg);
  };
};