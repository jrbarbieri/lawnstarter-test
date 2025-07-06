import { useState } from "react";
import { Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";
import { useIsMobile } from "../hooks/useIsMobile";
import { useSearchResults } from "../hooks/useSearchResults";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const isMobile = useIsMobile();
  const [searchParams, setSearchParams] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading } = useSearchResults(searchParams);

  function handleResults(params) {
    if (isMobile) {
      navigate("/results", { state: { searchParams: params } });
    } else {
      setSearchParams(params);
      setHasSearched(true);
    }
  }

  if (isMobile) {
    return <Search onResults={handleResults} />;
  }

  return (
    <Flex justify="space-between" align="start">
      <Search onResults={handleResults} />
      <Results data={data} isLoading={isLoading && hasSearched} />
    </Flex>
  );
}
