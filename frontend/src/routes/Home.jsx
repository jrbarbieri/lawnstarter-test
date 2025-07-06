import { useState } from "react";
import { Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";
import { useIsMobile } from "../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
import { usePeople } from "../hooks/usePeople";
import { useMovies } from "../hooks/useMovies";

export default function Home() {
  const isMobile = useIsMobile();
  const [searchParams, setSearchParams] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const { data: peopleData, isLoading: isPeopleLoading } = usePeople(
    searchParams?.type === "people" ? searchParams.query : null
  );

  const { data: moviesData, isLoading: isMoviesLoading } = useMovies(
    searchParams?.type === "movies" ? searchParams.query : null
  );

  const data = searchParams?.type === "people" ? peopleData : moviesData;
  const isLoading =
    hasSearched &&
    ((searchParams?.type === "people" && isPeopleLoading) ||
      (searchParams?.type === "movies" && isMoviesLoading));

  function handleResults(params) {
    setSearchParams(params);
    setHasSearched(true);
    if (isMobile) {
      navigate("/results", { state: { results: data } });
    }
  }

  if (isMobile) {
    return !hasSearched && <Search onResults={handleResults} />;
  }

  return (
    <Flex justify="space-between" align="start">
      <Search onResults={handleResults} />
      <Results data={data} isLoading={isLoading} />
    </Flex>
  );
}
