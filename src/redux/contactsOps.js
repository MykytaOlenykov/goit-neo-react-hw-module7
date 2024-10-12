import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsService } from "../services/api";
import { createAsyncErrorObj } from "../utils/asyncError";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await contactsService.getAll();
    } catch (error) {
      return rejectWithValue(createAsyncErrorObj(error));
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, { rejectWithValue }) => {
    try {
      return await contactsService.create(data);
    } catch (error) {
      return rejectWithValue(createAsyncErrorObj(error));
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await contactsService.deleteById(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(createAsyncErrorObj(error));
    }
  }
);
