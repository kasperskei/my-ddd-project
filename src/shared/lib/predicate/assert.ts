export const assert = (condition: unknown, message?: string): asserts condition => {
  if (condition !== true) {
    throw new Error(String(message))
  }
}
