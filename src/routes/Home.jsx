import { Container, Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();
  const DATA = [{ name: "Chewbacca" }, { name: "Obi" }];

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
