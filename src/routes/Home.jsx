import { Container, Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";

export default function Home() {
  const DATA = [{ name: "Chewbacca" }, { name: "Obi" }];

  return (
    <Container>
      <Flex justify="space-between" align="start">
        <Search />
        <Results data={DATA} />
      </Flex>
    </Container>
  );
}
