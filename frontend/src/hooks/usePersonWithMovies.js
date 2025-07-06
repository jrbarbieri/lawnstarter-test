import { useQuery } from "@tanstack/react-query";
import swapiService from "../services/swapiService";

export function usePersonWithMovies(uid) {
  return useQuery({
    queryKey: ["person-with-movies", uid],
    queryFn: () =>
      swapiService.getPersonWithMovies(uid).then((res) => res.data),
    enabled: !!uid,
  });
}
