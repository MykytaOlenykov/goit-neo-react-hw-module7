import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { asyncErrorMiddleware } from "./middlewares";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(asyncErrorMiddleware);
  },
});
