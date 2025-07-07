import { useQuery } from "@tanstack/react-query";
import swapiService from "../services/swapiService";

export default function useSearchStats() {
  return useQuery({
    queryKey: ["search_stats"],
    queryFn: () => swapiService.getSearchStats().then((res) => res.data),
  });
}
