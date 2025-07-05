import { Container, Divider, Flex, Text } from "@mantine/core";
import StyledBox from "./StyledBox";

export default function Results({ data }) {
  return (
    <StyledBox ml={30} h={600} w={600}>
      <Text>Results</Text>
      <Divider />
      <Container h="100%">
        <Flex justify="center" align="center" h="100%">
          {!data && (
            <Text align="center" c="warmGrey.0">
              There are zero matches.
              <br></br>Use the form to search for People or Movies.
            </Text>
          )}
        </Flex>
      </Container>
    </StyledBox>
  );
}
