import { useLocation, useNavigate } from "react-router-dom";
import Results from "../components/Results";

export default function ResultsRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  return <Results data={results} onBack={() => navigate("/")} />;
}
