import { usePeople } from "./usePeople";
import { useMovies } from "./useMovies";

export function useSearchResults(searchParams) {
  const { data: peopleData, isLoading: isPeopleLoading } = usePeople(
    searchParams?.type === "people" ? searchParams.query : null
  );
  const { data: moviesData, isLoading: isMoviesLoading } = useMovies(
    searchParams?.type === "movies" ? searchParams.query : null
  );

  const data = searchParams?.type === "people" ? peopleData : moviesData;
  const isLoading =
    (searchParams?.type === "people" && isPeopleLoading) ||
    (searchParams?.type === "movies" && isMoviesLoading);

  return { data, isLoading };
}
