import StyledBox from "./StyledBox";
import { Button, Group, Input, Radio, Text } from "@mantine/core";

export default function Search() {
  return (
    <StyledBox w={410} h={230}>
      <Text>What are you searching for?</Text>
      <Radio.Group>
        <Group gap="xl" mt="md" mb="md">
          <Radio color="headerGreen.0" value="people" label="People" />
          <Radio color="headerGreen.0" value="movies" label="Movies" />
        </Group>
      </Radio.Group>
      <Input placeholder="e.g. Chewbacca, Yoda, Boba Fett" />
      <Button fullWidth mt="auto">
        Search
      </Button>
    </StyledBox>
  );
}
