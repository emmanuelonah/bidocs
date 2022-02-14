function throwError(name: string, message: string, callee: Function) {
  const error = new Error();
  error.name = `${name} 🧨`;
  error.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(callee);
  }

  throw error;
}

export { throwError };
