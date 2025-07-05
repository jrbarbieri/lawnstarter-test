import StyledBox from "./StyledBox";
import { Button, Group, TextInput, Radio, Text, Box } from "@mantine/core";
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

  function handleSearch(e) {
    if (e) e.preventDefault();
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
      <Box
        component="form"
        onSubmit={handleSearch}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
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
        <TextInput
          placeholder="e.g. Chewbacca, Yoda, Boba Fett"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          autoFocus
        />
        <Button fullWidth mt="auto" type="submit">
          Search
        </Button>
      </Box>
    </StyledBox>
  );
}
