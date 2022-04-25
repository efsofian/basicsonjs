class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message)
  }
}
