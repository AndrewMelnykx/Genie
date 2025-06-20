import axios from "axios";

import { RejectedValue } from "../types";

const handleAxiosError = (err: unknown): RejectedValue => {
  if (axios.isAxiosError(err)) {
    const errorMessage =
      err.response?.data && typeof err.response.data === "string"
        ? err.response.data
        : "Unknown error";
    return {
      error: errorMessage,
      statusCode: err.response?.status || 500,
    };
  }
  return {
    error: "Unexpected error",
    statusCode: 500,
  };
};

export { handleAxiosError };
