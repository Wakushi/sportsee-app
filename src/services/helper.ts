import {
  CustomHttpError,
  InvalidResponseError,
  NetworkError,
} from "../types/errors"
import { Performance, PerformanceKind } from "../types/performance"

export async function fetchHandler<T>(
  url: string,
  errorContext: string
): Promise<T> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      const errorMessages: Record<number, string> = {
        404: `${errorContext} not found`,
        500: "Internal server error",
      }

      const message =
        errorMessages[response.status] ||
        `Unexpected error: ${response.statusText}`
      throw new CustomHttpError(message, response.status)
    }

    const { data } = await response.json()
    return data
  } catch (error) {
    if (error instanceof CustomHttpError) {
      throw error
    }

    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new NetworkError("Unable to connect to the server")
    }

    if (error instanceof SyntaxError) {
      throw new InvalidResponseError("Invalid response from server")
    }

    throw new Error(
      `Unexpected error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    )
  }
}

export function validatePerformance(data: unknown): Performance {
  const performance = data as any
  return {
    userId: performance.userId,
    data: performance.data.map((item: any) => ({
      value: item.value,
      kind: item.kind as PerformanceKind,
    })),
  }
}
