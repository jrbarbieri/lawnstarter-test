import { useState } from "react";
import { Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  function handleResults(data) {
    setResults(data);
    setHasSearched(true);
  }

  function handleBack() {
    setHasSearched(false);
    setResults([]);
  }

  if (isMobile) {
    return (
      <>
        {!hasSearched && <Search onResults={handleResults} />}
        {hasSearched && <Results data={results} onBack={handleBack} />}
      </>
    );
  }

  return (
    <Flex justify="space-between" align="start">
      <Search onResults={setResults} />
      <Results data={results} />
    </Flex>
  );
}
