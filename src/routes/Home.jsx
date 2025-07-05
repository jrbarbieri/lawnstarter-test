import { useState } from "react";
import { Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  const [results, setResults] = useState([]);

  if (isMobile) {
    return (
      <>
        <Search onResults={setResults} />
        <Results data={results} />
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
