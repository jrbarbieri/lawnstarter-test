import { useQuery } from "@tanstack/react-query";
import swapiService from "../services/swapiService";

export function useMovies(q) {
  const { data, isLoading } = useQuery({
    queryKey: ["movies", q],
    queryFn: async () => {
      if (!q) return [];
      const response = await swapiService.getMovies({ q });
      return response.data?.results || response.data || [];
    },
    enabled: !!q,
    staleTime: 1000 * 60,
  });

  return { data, isLoading };
}
