import StyledBox from "./StyledBox";
import { Button, Group, Input, Radio, Text } from "@mantine/core";
import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";

const StyledText = styled(Text)`
  @media (min-width: 48em) {
    font-weight: 600;
    color: #383838;
  }
`;

export default function Search() {
  const isMobile = useIsMobile();
  return (
    <StyledBox w={410} h={230}>
      {isMobile ? (
        <Text>What are you searching for?</Text>
      ) : (
        <StyledText>What are you searching for?</StyledText>
      )}
      <Radio.Group>
        <Group gap="xl" mt="md" mb="md">
          <Radio color="green.0" value="people" label="People" />
          <Radio color="green.0" value="movies" label="Movies" />
        </Group>
      </Radio.Group>
      <Input placeholder="e.g. Chewbacca, Yoda, Boba Fett" />
      <Button fullWidth mt="auto">
        Search
      </Button>
    </StyledBox>
  );
}
