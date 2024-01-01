import { formKeys } from "../constants/form-keys";
import { getNotes } from "../home/services/index";
import { useQuery } from "@tanstack/react-query";

export const useFetchNotesQuery = () => {
  const queryGetNotes = useQuery({
    queryKey: [formKeys.getNotes],
    queryFn: () => getNotes(),
  });
  return queryGetNotes;
};
