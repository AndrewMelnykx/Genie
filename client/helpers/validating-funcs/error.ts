import axios from "axios";

import { RejectedValue } from "../types";
import { statuses } from "../constants/api";

const handleAxiosError = (err: unknown): RejectedValue => {
  if (axios.isAxiosError(err)) {
    const errorMessage =
      err.response?.data && typeof err.response.data === "string"
        ? err.response.data
        : "Unknown error";
    return {
      error: errorMessage,
      statusCode: err.response?.status || statuses.internalServerError,
    };
  }
  return {
    error: "Unexpected error",
    statusCode: statuses.internalServerError,
  };
};

export { handleAxiosError };
