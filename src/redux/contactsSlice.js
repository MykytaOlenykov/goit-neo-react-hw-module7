import {
  createSelector,
  createSlice,
  isPending,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(({ id }) => id !== action.payload);
        state.loading = false;
      })
      .addMatcher(isPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isRejectedWithValue, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFilter.trim().toLowerCase())
    );
  }
);

export default contactsSlice.reducer;
