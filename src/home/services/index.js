import { client } from "../../shared/api/client";

export const getNotes = async () => {
  return await client.get("/notes").then((response) => response.data.data);
};

export const postNote = async (data) => {
  return await client.post(`/notes`, data);
};
