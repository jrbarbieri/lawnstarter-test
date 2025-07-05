import React from "react";
import { Container, Button, Divider, Flex, Text } from "@mantine/core";
import StyledBox from "./StyledBox";
import { useNavigate } from "react-router-dom";

export default function Results({ data }) {
  const navigate = useNavigate();

  return (
    <StyledBox ml={30} h={600} w={600}>
      <Text variant="title">Results</Text>
      <Divider />
      {data &&
        data.map((character, idx) => {
          const isLast = idx === data.length - 1;
          return (
            <React.Fragment key={idx}>
              <Flex justify="space-between" align="center" mb="sm" mt="sm">
                <Text variant="subtitle">{character.name}</Text>
                <Button onClick={() => navigate("/person")}>See Details</Button>
              </Flex>
              {!isLast && <Divider />}
            </React.Fragment>
          );
        })}
      {!data && (
        <Flex justify="center" align="center" h="100%">
          <Text align="center" c="lightGrey.0">
            There are zero matches.
            <br />
            Use the form to search for People or Movies.
          </Text>
        </Flex>
      )}
    </StyledBox>
  );
}
