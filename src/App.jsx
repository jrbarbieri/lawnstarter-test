import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home.jsx";
import PersonDetails from "./routes/PersonDetails.jsx";
import MovieDetails from "./routes/MovieDetails.jsx";
import { Container } from "@mantine/core";

function App() {
  return (
    <>
      <Header />
      <Container variant="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/person" element={<PersonDetails />}></Route>
          <Route path="/movie" element={<MovieDetails />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
