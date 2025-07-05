import { Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";
import { useIsMobile } from "../hooks/useIsMobile";
import swapiMock from "../mocks/swapi-mock.json";

export default function Home() {
  const isMobile = useIsMobile();
  const DATA = swapiMock.people;

  if (isMobile) {
    return (
      <>
        <Search />
      </>
    );
  }

  return (
    <Flex justify="space-between" align="start">
      <Search />
      <Results data={DATA} />
    </Flex>
  );
}
