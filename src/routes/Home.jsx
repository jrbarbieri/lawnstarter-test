import { useState } from "react";
import { Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";
import { useIsMobile } from "../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const isMobile = useIsMobile();
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  function handleResults(data) {
    setResults(data);
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
      <Search onResults={setResults} />
      <Results data={results} />
    </Flex>
  );
}
