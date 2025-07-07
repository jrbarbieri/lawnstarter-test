import React from "react";
import DetailsLayout from "../components/DetailsLayout";
import { Divider, Text, Loader, Flex } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import { usePersonWithMovies } from "../hooks/usePersonWithMovies";

export default function PersonDetails() {
  const navigate = useNavigate();
  const { uid } = useParams();
  const { data, isLoading } = usePersonWithMovies(uid);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" h={400}>
        <Loader color="green.0" size="lg" />
      </Flex>
    );
  }

  if (!data) {
    return <Text>Person not found.</Text>;
  }

  const leftBlock = (
    <>
      <Text variant="subtitle">Details</Text>
      <Divider mt={10} mb={5} />
      <Text>
        <b>Name:</b> {data.name}
        <br />
        <b>Birth year:</b> {data.details.birth_year}
        <br />
        <b>Eye color:</b> {data.details.eye_color}
        <br />
        <b>Gender:</b> {data.details.gender}
        <br />
        <b>Hair color:</b> {data.details.hair_color}
        <br />
        <b>Height:</b> {data.details.height} m
        <br />
        <b>Mass:</b> {data.details.mass} kg
      </Text>
    </>
  );

  const rightBlock = (
    <>
      <Text variant="subtitle">Movies</Text>
      <Divider mt={10} mb={5} />
      {data.movies && data.movies.length > 0 ? (
        <Text>
          {data.movies.map((movie, idx) => (
            <React.Fragment key={movie.uid}>
              <LinkButton to={`/movie/${movie.uid}`}>{movie.title}</LinkButton>
              {idx < data.movies.length - 1 && ", "}
            </React.Fragment>
          ))}
        </Text>
      ) : (
        <Text>No movies found.</Text>
      )}
    </>
  );

  return (
    <DetailsLayout
      title={data.name}
      leftBlock={leftBlock}
      rightBlock={rightBlock}
      buttonText="Back to search"
      onButtonClick={() => navigate("/")}
      minHeight={400}
    />
  );
}
