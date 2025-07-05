import DetailsLayout from "../components/DetailsLayout";
import { Divider, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const navigate = useNavigate();

  const leftBlock = (
    <>
      <Text variant="subtitle">Opening Crawl</Text>
      <Divider mt={10} mb={5} />
      <Text>
        Luke Skywalker has returned to his home planet of Tatooine in an attempt
        to rescue his friend Han Solo from the clutches of the vile gangster
        Jabba the Hutt.
      </Text>
      <Text mt={10}>
        Little does Luke know that the GALACTIC EMPIRE has secretly begun
        construction on a new armored space station even more powerful than the
        first dreaded Death Star.
      </Text>
      <Text mt={10}>
        When completed, this ultimate weapon will spell certain doom for the
        small band of rebels struggling to restore freedom to the galaxy...
      </Text>
    </>
  );

  const rightBlock = (
    <>
      <Text variant="subtitle">Characters</Text>
      <Divider mt={10} mb={5} />
      <Text>
        Luke Skywalker, Jabba Desiliijiic Tiure, Wedge Antilles, Jek Tono
        Porkins, Raymus Antilles, C-3PO, R2-D2, Darth Vader, Bib Fortuna, Leia
        Organa, Owen Lars, Beru Whitesun Lars, R5-D4, Biggs Darklight, Obi-Wan
        Kenobi, Wilhuff Tarkin, Chewbacca, Han Solo
      </Text>
    </>
  );

  return (
    <DetailsLayout
      title="Return of the Jedi"
      leftBlock={leftBlock}
      rightBlock={rightBlock}
      buttonText="Back to search"
      onButtonClick={() => navigate("/")}
      minHeight={400}
    />
  );
}
