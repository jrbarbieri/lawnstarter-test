import DetailsLayout from "../components/DetailsLayout";
import { Divider, Text, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

export default function PersonDetails() {
  const navigate = useNavigate();

  const leftBlock = (
    <>
      <Text variant="subtitle">Details</Text>
      <Divider mt={10} mb={5} />
      <Text>
        Birth Year: 24BBY
        <br />
        Gender: male
        <br />
        Eye Color: brown
        <br />
        Hair Color: black
        <br />
        Height: 183
        <br />
        Mass: 84
      </Text>
    </>
  );

  const rightBlock = (
    <>
      <Text variant="subtitle">Movies</Text>
      <Divider mt={10} mb={5} />
      <Button variant="linkText" component={Link} to="/movie">
        Return of the Jedi
      </Button>
    </>
  );

  return (
    <DetailsLayout
      title="Bib fortuna"
      leftBlock={leftBlock}
      rightBlock={rightBlock}
      buttonText="Back to search"
      onButtonClick={() => navigate("/")}
      minHeight={400}
    />
  );
}
