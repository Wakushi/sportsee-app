class CustomHttpError extends Error {
  constructor(message: string, public status: number) {
    super(message)
    this.name = "CustomHttpError"
  }
}

class NetworkError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "NetworkError"
  }
}

class InvalidResponseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "InvalidResponseError"
  }
}

export { CustomHttpError, NetworkError, InvalidResponseError }
