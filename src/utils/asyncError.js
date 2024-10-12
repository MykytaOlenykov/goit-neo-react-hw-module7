import { isAxiosError } from "axios";

const errorMessages = {
  400: "Invalid data",
  404: "Not found",
  500: "Something went wrong. Try again.",
};

export const createAsyncErrorObj = (error) => {
  let message = errorMessages[500];
  let statusCode = 500;

  if (isAxiosError(error)) {
    statusCode = error.status;
    if (errorMessages[statusCode]) {
      message = errorMessages[statusCode];
    }
  }

  return { message, statusCode };
};

export const isAsyncError = (error) => {
  if (typeof error !== "object") return false;
  const keys = Object.keys(error);
  return keys.includes("message") && keys.includes("statusCode");
};
