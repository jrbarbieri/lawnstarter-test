import DetailsLayout from "../components/DetailsLayout";
import { Divider, Text, Loader, Flex } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import LinkButton from "../components/LinkButton";
import { useMovieWithCharacters } from "../hooks/useMovieWithCharacters";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { uid } = useParams();
  const { data, isLoading } = useMovieWithCharacters(uid);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" h={400}>
        <Loader color="green.0" size="lg" />
      </Flex>
    );
  }

  if (!data) {
    return <Text>Movie not found.</Text>;
  }

  const leftBlock = (
    <>
      <Text variant="subtitle">Details</Text>
      <Divider mt={10} mb={5} />
      <Text>
        Title: {data.title}
        <br />
        UID: {data.uid}
      </Text>
    </>
  );

  const rightBlock = (
    <>
      <Text variant="subtitle">Characters</Text>
      <Divider mt={10} mb={5} />
      {data.characters && data.characters.length > 0 ? (
        <Text>
          {data.characters.map((person, idx) => (
            <React.Fragment key={person.uid}>
              <LinkButton to={`/person/${person.uid}`}>
                {person.name}
              </LinkButton>
              {idx < data.characters.length - 1 && ", "}
            </React.Fragment>
          ))}
        </Text>
      ) : (
        <Text>No characters found.</Text>
      )}
    </>
  );

  return (
    <DetailsLayout
      title={data.title}
      leftBlock={leftBlock}
      rightBlock={rightBlock}
      buttonText="Back to search"
      onButtonClick={() => navigate("/")}
      minHeight={400}
    />
  );
}
