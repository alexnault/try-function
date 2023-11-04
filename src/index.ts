/**
 * TODO desc
 * @param TODO param
 * @param TODO param
 * @param TODO param
 * @returns TODO returns
 */
function tryFn<TFnResult, TErrorResult>(
  tryFn: () => TFnResult,
  catchFn: (error: unknown) => TErrorResult
): TFnResult | TErrorResult;
function tryFn<TFnResult, TErrorResult>(
  tryFn: () => TFnResult,
  catchFn: (error: unknown) => TErrorResult,
  finallyFn: () => void
): TFnResult | TErrorResult;
function tryFn<TFnResult>(
  tryFn: () => TFnResult,
  catchFn: undefined,
  finallyFn: () => void
): TFnResult | undefined;
function tryFn<TFnResult, TErrorResult>(
  tryFn: () => TFnResult,
  catchFn?: (error: unknown) => TErrorResult,
  finallyFn?: () => void
): TFnResult | TErrorResult | undefined {
  if (catchFn && finallyFn) {
    try {
      return tryFn();
    } catch (error) {
      return catchFn(error);
    } finally {
      finallyFn();
    }
  }

  if (catchFn) {
    try {
      return tryFn();
    } catch (error) {
      return catchFn(error);
    }
  }

  if (finallyFn) {
    try {
      return tryFn();
    } finally {
      finallyFn();
    }
  }
}

export { tryFn };
// TODO export default?
