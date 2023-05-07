export function awaitPromise<T>(promise: Promise<T>): T {
  var value: T | null = null;

  promise.then((promiseValue) => (value = promiseValue));

  while (!value) {}

  return value;
}
