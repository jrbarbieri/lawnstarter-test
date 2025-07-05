import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home.jsx";
import PersonDetails from "./routes/PersonDetails.jsx";
import MovieDetails from "./routes/MovieDetails.jsx";
import { Container, Box } from "@mantine/core";
import ResultsRoute from "./routes/ResultsRoute.jsx";

function App() {
  return (
    <Container
      p={0}
      fluid
      h="100vh"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Header style={{ flexShrink: 0 }} />
      <Box
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/person" element={<PersonDetails />}></Route>
          <Route path="/movie" element={<MovieDetails />}></Route>
          <Route path="/results" element={<ResultsRoute />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
