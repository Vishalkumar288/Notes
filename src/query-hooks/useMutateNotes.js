import { postNote } from "../home/services/index";
import { useMutation } from "@tanstack/react-query";

export const useMutateNotes = () => {
  const sendNote = useMutation((data) => postNote(data));
  return sendNote;
};

export default useMutateNotes;
