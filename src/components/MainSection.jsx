import { Col, Row } from "react-bootstrap";
import GenresBar from "./GenresBar";
import SongSection from "./SongSection";

const MainSection = () => {
  return (
    <main className="mainPage">
      <Col xs="12" md={{ span: 9, offset: 3 }}>
        <GenresBar />
        <Row>
          <SongSection artistName={"Queen"} />
          <SongSection artistName={"Good Boy Daisy"} />
          <SongSection artistName={"Dua Lipa"} id={"last-section"} />
        </Row>
      </Col>
    </main>
  );
};

export default MainSection;
