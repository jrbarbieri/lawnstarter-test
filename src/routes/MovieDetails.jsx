import { Box, Button, Divider, Flex, Text } from "@mantine/core";
import StyledBox from "../components/StyledBox";
import { useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const navigate = useNavigate();

  return (
    <StyledBox w={810} h="auto" mx="auto" mih={540}>
      <Text variant="title">Return of the Jedi</Text>
      <Flex gap={100} align="start" mt="xl" mb="xl">
        <Box style={{ flex: 1 }}>
          <Text variant="subtitle">Opening Crawl</Text>
          <Divider mt={10} mb={5} />
          <Text>
            Luke Skywalker has returned to his home planet of Tatooine in an
            attempt to rescue his friend Han Solo from the clutches of the vile
            gangster Jabba the Hutt.
          </Text>
          <Text mt={10}>
            Little does Luke know that the GALACTIC EMPIRE has secretly begun
            construction on a new armored space station even more powerful than
            the first dreaded Death Star.
          </Text>
          <Text mt={10}>
            When completed, this ultimate weapon will spell certain doom for the
            small band of rebels struggling to restore freedom to the galaxy...
          </Text>
        </Box>
        <Box style={{ flex: 1 }}>
          <Text variant="subtitle">Characters</Text>
          <Divider mt={10} mb={5} />
          <Text>
            Luke Skywalker, Jabba Desiliijiic Tiure, Wedge Antilles, Jek Tono
            Porkins, Raymus Antilles, C-3PO, R2-D2, Darth Vader, Bib Fortuna,
            Leia Organa, Owen Lars, Beru Whitesun Lars, R5-D4, Biggs Darklight,
            Obi-Wan Kenobi, Wilhuff Tarkin, Chewbacca, Han Solo
          </Text>
        </Box>
      </Flex>
      <Button onClick={() => navigate("/")} w={200} mt="auto">
        Back to search
      </Button>
    </StyledBox>
  );
}
