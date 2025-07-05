import React from "react";
import { Button, Divider, Flex, Text, Box } from "@mantine/core";
import StyledBox from "./StyledBox";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";

const ResultCard = ({ character, onClick }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Flex direction="column" align="stretch" mb="md" mt="md">
        <Text variant="subtitle">{character?.name || character?.title}</Text>
        <Button onClick={onClick} mt="md">
          See Details
        </Button>
      </Flex>
    );
  } else {
    return (
      <Flex justify="space-between" align="center" mb="sm" mt="sm">
        <Text variant="subtitle">{character?.name || character?.title}</Text>
        <Button onClick={onClick}>See Details</Button>
      </Flex>
    );
  }
};

export default function Results({ data, onBack }) {
  const navigate = useNavigate();

  return (
    <StyledBox ml="xl" h={600} w={600}>
      <Text variant="title">Results</Text>
      <Divider />
      <Box mb="xl" h="100%">
        {data.length > 0 ? (
          data.map((character, idx) => {
            const isLast = idx === data.length - 1 && !onBack;
            return (
              <React.Fragment key={idx}>
                <ResultCard
                  character={character}
                  onClick={() => navigate("/person")}
                />
                {!isLast && <Divider />}
              </React.Fragment>
            );
          })
        ) : (
          <Flex justify="center" align="center" h="100%" w="100%">
            <Text align="center" c="lightGrey.1" fw={700}>
              There are zero matches.
              <br />
              Use the form to search for People or Movies.
            </Text>
          </Flex>
        )}
      </Box>
      {onBack && (
        <Button onClick={onBack} mt="auto">
          Back to search
        </Button>
      )}
    </StyledBox>
  );
}
