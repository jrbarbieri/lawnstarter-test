import StyledBox from "./StyledBox";
import { Button, Group, TextInput, Radio, Text, Box } from "@mantine/core";
import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import useSearchStats from "../hooks/useSearchStats";
import SearchStatsModal from "./SearchStatsModal";

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
  const [modalOpened, { open, close }] = useDisclosure(false);
  const { data: statsData } = useSearchStats();

  function handleSearch(e) {
    if (e) e.preventDefault();

    if (onResults) onResults({ type: searchType, query });
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
        <Group align="center" justify="space-between" mb="xs">
          <Radio.Group value={searchType} onChange={setSearchType}>
            <Group gap="xl" mt="md" mb="md">
              <Radio color="green.0" value="people" label="People" />
              <Radio color="green.0" value="movies" label="Movies" />
            </Group>
          </Radio.Group>
          <Button
            variant="subtle"
            color="gray"
            onClick={open}
            aria-label="Show search stats"
            style={{ marginLeft: 8, padding: 0, minWidth: 36, fontSize: 22 }}
          >
            <span role="img" aria-label="stats">
              📊
            </span>
          </Button>
        </Group>
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
      <SearchStatsModal opened={modalOpened} onClose={close} data={statsData} />
    </StyledBox>
  );
}
