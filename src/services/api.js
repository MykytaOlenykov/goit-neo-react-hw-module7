import axios from "axios";

const api = axios.create({
  baseURL: "https://670ad9acac6860a6c2caafe4.mockapi.io/",
});

export const contactsService = {
  async getAll() {
    const { data } = await api.get("contacts");
    return data;
  },
  async create(newContact) {
    const { data } = await api.post("contacts", newContact);
    return data;
  },
  async deleteById(contactId) {
    const { data } = await api.delete(`contacts/${contactId}`);
    return data;
  },
};
