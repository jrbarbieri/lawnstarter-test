import { Container, Button, Divider, Flex, Text } from "@mantine/core";
import StyledBox from "./StyledBox";

export default function Results({ data }) {
  return (
    <StyledBox ml={30} h={600} w={600}>
      <Text variant="title">Results</Text>
      <Divider />
      <Container h="100%" w="100%" p={0}>
        {data &&
          data.map((data, idx) => (
            <>
              <Flex
                key={idx}
                justify="space-between"
                align="center"
                mb="sm"
                mt="sm"
              >
                <Text variant="subtitle">{data.name}</Text>
                <Button>See Details</Button>
              </Flex>
              <Divider />
            </>
          ))}
        {!data && (
          <Flex justify="center" align="center" h="100%">
            <Text align="center" c="lightGrey.0">
              There are zero matches.
              <br />
              Use the form to search for People or Movies.
            </Text>
          </Flex>
        )}
      </Container>
    </StyledBox>
  );
}
