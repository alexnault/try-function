/**
 * TODO desc
 * @param TODO param
 * @param TODO param
 * @param TODO param
 * @returns TODO returns
 */
function tryFn<TFnResult, TCatchResult>(
  tryFn: () => TFnResult,
  catchFn: (error: unknown) => TCatchResult
): TFnResult | TCatchResult;

function tryFn<TFnResult, TCatchResult>(
  tryFn: () => TFnResult,
  catchFn: (error: unknown) => TCatchResult,
  finallyFn: () => void
): TFnResult | TCatchResult;

function tryFn<TFnResult, TCatchResult>(
  tryFn: () => TFnResult,
  catchFn: undefined,
  finallyFn: () => void
): TFnResult | TCatchResult;

function tryFn<TFnResult, TCatchResult>(
  tryFn: (() => TFnResult) | (() => Promise<TFnResult>),
  catchFn?:
    | ((error: unknown) => TCatchResult)
    | ((error: unknown) => Promise<TCatchResult>),
  finallyFn?: () => void
): TFnResult | TCatchResult | Promise<TFnResult | TCatchResult> {
  if (catchFn && finallyFn) {
    try {
      const resultOrPromise = tryFn();
      if (resultOrPromise instanceof Promise) {
        return resultOrPromise.catch(catchFn);
      }
      return resultOrPromise;
    } catch (error) {
      return catchFn(error);
    } finally {
      finallyFn();
    }
  }

  if (finallyFn) {
    try {
      const resultOrPromise = tryFn();
      if (resultOrPromise instanceof Promise) {
        return resultOrPromise.catch(catchFn);
      }
      return resultOrPromise;
    } finally {
      finallyFn();
    }
  }

  if (!catchFn) {
    throw new Error("Missing `catch` or `finally` function.");
  }

  try {
    const resultOrPromise = tryFn();
    if (resultOrPromise instanceof Promise) {
      return resultOrPromise.catch(catchFn);
    }
    return resultOrPromise;
  } catch (error) {
    return catchFn(error);
  }
}

export { tryFn };
