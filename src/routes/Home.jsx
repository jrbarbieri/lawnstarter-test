import { Container, Flex } from "@mantine/core";
import Search from "../components/Search";
import Results from "../components/Results";

export default function Home() {
  return (
    <Container>
      <Flex justify="space-between" align="start">
        <Search />
        <Results />
      </Flex>
    </Container>
  );
}
