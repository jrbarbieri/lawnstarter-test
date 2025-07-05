import { Box, Button, Divider, Flex, Text } from "@mantine/core";
import StyledBox from "../components/StyledBox";
import { useNavigate } from "react-router-dom";

export default function PersonDetails() {
  const navigate = useNavigate();

  return (
    <StyledBox w={810} h={410} mx="auto">
      <Text variant="title">Bib fortuna</Text>
      <Flex gap={100} align="start" mt={30}>
        <Box style={{ flex: 1 }}>
          <Text variant="subtitle">Details</Text>
          <Divider mt={10} mb={5} />
          <Text>
            Birth Year: 24BBY
            <br />
            Gender: male
            <br />
            Eye Color: brown
            <br />
            Hair Color: black
            <br />
            Height: 183
            <br />
            Mass: 84
          </Text>
        </Box>
        <Box style={{ flex: 1 }}>
          <Text variant="subtitle">Movies</Text>
          <Divider mt={10} mb={5} />
          <Text>Return of the Jedi</Text>
        </Box>
      </Flex>
      <Button onClick={() => navigate("/")} w={200} mt="auto">
        Back to search
      </Button>
    </StyledBox>
  );
}
