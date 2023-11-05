export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function willPass<T>(value: T): T {
  return value;
}

export function willThrow<T>(value: T): T {
  throw new Error("The function failed.");
  return value;
}

export async function willPassAsync<T>(value: T): Promise<T> {
  await sleep(1);
  return value;
}

export async function willThrowAsync<T>(value: T): Promise<T> {
  await sleep(1);
  throw new Error("The function failed.");
  return value;
}
