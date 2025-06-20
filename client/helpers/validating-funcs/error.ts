import axios from "axios";

import { RejectedValue } from "../types";
import { statues } from "../constants/api";

const handleAxiosError = (err: unknown): RejectedValue => {
  if (axios.isAxiosError(err)) {
    const errorMessage =
      err.response?.data && typeof err.response.data === "string"
        ? err.response.data
        : "Unknown error";
    return {
      error: errorMessage,
      statusCode: err.response?.status || statues.internalServerError,
    };
  }
  return {
    error: "Unexpected error",
    statusCode: statues.internalServerError,
  };
};

export { handleAxiosError };
