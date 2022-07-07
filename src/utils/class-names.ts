type StringOrFalsyOrUndefined = string | false | undefined | 0

/**
 * ## Description
 * Combines many class name strings together with space separator.
 *
 * ## Why?
 * It is common to use && to conditionally do something. When falsy && is evaluated to a string:
 * - `conditionThatIsFalse && 'my string'` -> `'undefined'`
 * This function converts false or undefined results to the empty string, as expected.
 *
 * ## Examples
 * - `('alwaysAdded', condition && 'mayBeAdded')` -> `'alwaysAdded'` when `mayBeAdded = false`
 * - `('alwaysAdded', mayBeUndefined)` -> `'alwaysAdded'` when `mayBeUndefined = '' | undefined`
 *
 * @param {StringOrFalsyOrUndefined []} classNames
 * @returns {string}
 * All non-empty strings that were input, separated by space.
 */
const classNames = (...classNames: StringOrFalsyOrUndefined[]): string => {
  return classNames
    .filter(
      (item) => item
    ) /* Eliminates empty or undefined strings, and `false`, which will evaluate to `false` */
    .join(' ') /* Separates actual class names by space */
}

export default classNames
