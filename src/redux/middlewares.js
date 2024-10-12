import toast from "react-hot-toast";

import { isAsyncError } from "../utils/asyncError";

export const asyncErrorMiddleware = () => (next) => (action) => {
  if (isAsyncError(action.payload)) {
    toast.error(action.payload.message);
  }

  next(action);
};
