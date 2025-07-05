import StyledBox from "./StyledBox";
import { Button, Group, Input, Radio, Text } from "@mantine/core";
import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
import { useState } from "react";
import swapiMock from "../mocks/swapi-mock.json";

const StyledText = styled(Text)`
  @media (min-width: 48em) {
    font-weight: 600;
    color: #383838;
  }
`;

export default function Search({ onResults }) {
  const isMobile = useIsMobile();
  const [searchType, setSearchType] = useState("people");
  const [query, setQuery] = useState("");

  function handleSearch() {
    const data =
      searchType === "people"
        ? swapiMock.people.filter((p) =>
            p.name.toLowerCase().includes(query.trim().toLowerCase())
          )
        : swapiMock.movies.filter((m) =>
            m.title.toLowerCase().includes(query.trim().toLowerCase())
          );
    if (onResults) onResults(data);
  }

  return (
    <StyledBox w={410} h={230}>
      {isMobile ? (
        <Text>What are you searching for?</Text>
      ) : (
        <StyledText>What are you searching for?</StyledText>
      )}
      <Radio.Group value={searchType} onChange={setSearchType}>
        <Group gap="xl" mt="md" mb="md">
          <Radio color="green.0" value="people" label="People" />
          <Radio color="green.0" value="movies" label="Movies" />
        </Group>
      </Radio.Group>
      <Input
        placeholder="e.g. Chewbacca, Yoda, Boba Fett"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button fullWidth mt="auto" onClick={handleSearch}>
        Search
      </Button>
    </StyledBox>
  );
}
