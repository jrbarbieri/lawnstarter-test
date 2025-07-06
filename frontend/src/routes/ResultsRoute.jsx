import { useLocation, useNavigate } from "react-router-dom";
import Results from "../components/Results";
import { useSearchResults } from "../hooks/useSearchResults";

export default function ResultsRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = location.state?.searchParams;

  const { data, isLoading } = useSearchResults(searchParams);

  return (
    <Results data={data} onBack={() => navigate("/")} isLoading={isLoading} />
  );
}
