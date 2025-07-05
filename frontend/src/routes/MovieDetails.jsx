import DetailsLayout from "../components/DetailsLayout";
import { Divider, Text } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import swapiMock from "../mocks/swapi-mock.json";
import React from "react";
import LinkButton from "../components/LinkButton";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { uid } = useParams();
  const movie = swapiMock.movies.find((m) => m.uid === uid);

  if (!movie) {
    return <Text>Movie not found.</Text>;
  }

  const characters = swapiMock.people.filter((p) =>
    p.films.includes(movie.title)
  );

  const leftBlock = (
    <>
      <Text variant="subtitle">Details</Text>
      <Divider mt={10} mb={5} />
      <Text>
        Title: {movie.title}
        <br />
        Release Date: {movie.release_date}
        <br />
        URL:{" "}
        <a href={movie.url} target="_blank" rel="noopener noreferrer">
          {movie.url}
        </a>
      </Text>
    </>
  );

  const rightBlock = (
    <>
      <Text variant="subtitle">Characters</Text>
      <Divider mt={10} mb={5} />
      {characters.length > 0 ? (
        <Text>
          {characters.map((person, idx) => (
            <React.Fragment key={person.uid}>
              <LinkButton to={`/person/${person.uid}`}>
                {person.name}
              </LinkButton>
              {idx < characters.length - 1 && ", "}
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
      title={movie.title}
      leftBlock={leftBlock}
      rightBlock={rightBlock}
      buttonText="Back to search"
      onButtonClick={() => navigate("/")}
      minHeight={400}
    />
  );
}
