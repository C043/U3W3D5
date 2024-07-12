import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SpotifySideBar from "./components/SpotifySideBar";

function App() {
  return (
    <Container fluid>
      <SpotifySideBar />
    </Container>
  );
}

export default App;
