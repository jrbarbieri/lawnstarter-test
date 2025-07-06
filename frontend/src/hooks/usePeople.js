import { useQuery } from "@tanstack/react-query";
import swapiService from "../services/swapiService";

export function usePeople(q) {
  const { data, isLoading } = useQuery({
    queryKey: ["people", q],
    queryFn: async () => {
      if (!q) return [];
      const response = await swapiService.getPeople({ q });
      return response.data?.results || response.data || [];
    },
    enabled: !!q,
    staleTime: 1000 * 60,
  });

  return { data, isLoading };
}
