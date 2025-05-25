import { useParams } from "react-router-dom";

function FactPage() {
  const { id } = useParams();
  return <h2>Fact Page :{id}</h2>;
}

export default FactPage;
