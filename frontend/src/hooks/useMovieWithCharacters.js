import { useQuery } from "@tanstack/react-query";
import swapiService from "../services/swapiService";

export function useMovieWithCharacters(uid) {
  return useQuery({
    queryKey: ["movie-with-characters", uid],
    queryFn: () =>
      swapiService.getMovieWithCharacters(uid).then((res) => res.data),
    enabled: !!uid,
  });
}
