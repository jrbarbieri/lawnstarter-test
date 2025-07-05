import React from "react";
import DetailsLayout from "../components/DetailsLayout";
import { Divider, Text } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import swapiMock from "../mocks/swapi-mock.json";
import LinkButton from "../components/LinkButton";

export default function PersonDetails() {
  const navigate = useNavigate();
  const { uid } = useParams();
  const person = swapiMock.people.find((p) => p.uid === uid);

  if (!person) {
    return <Text>Person not found.</Text>;
  }

  const leftBlock = (
    <>
      <Text variant="subtitle">Details</Text>
      <Divider mt={10} mb={5} />
      <Text>
        Name: {person.name}
        <br />
        URL:{" "}
        <a href={person.url} target="_blank" rel="noopener noreferrer">
          {person.url}
        </a>
        <br />
      </Text>
    </>
  );

  const rightBlock = (
    <>
      <Text variant="subtitle">Movies</Text>
      <Divider mt={10} mb={5} />
      {person.films && person.films.length > 0 ? (
        <Text>
          {person.films.map((filmTitle, idx) => {
            const movie = swapiMock.movies.find((m) => m.title === filmTitle);
            return movie ? (
              <React.Fragment key={movie.uid}>
                <LinkButton to={`/movie/${movie.uid}`}>
                  {movie.title}
                </LinkButton>
                {idx < person.films.length - 1 && ", "}
              </React.Fragment>
            ) : null;
          })}
        </Text>
      ) : (
        <Text>No movies found.</Text>
      )}
    </>
  );

  return (
    <DetailsLayout
      title={person.name}
      leftBlock={leftBlock}
      rightBlock={rightBlock}
      buttonText="Back to search"
      onButtonClick={() => navigate("/")}
      minHeight={400}
    />
  );
}
