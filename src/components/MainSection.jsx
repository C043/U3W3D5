import { Col } from "react-bootstrap";
import GenresBar from "./GenresBar";

const MainSection = () => {
  return (
    <main className="mainPage">
      <Col xs="12" md={{ span: 9, offset: 3 }}>
        <GenresBar />
        <div className="row">
          <div className="col-10">
            <div id="rock">
              <h2>Rock</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="hiphop">
              <h2>HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              ></div>
            </div>
          </div>
        </div>
      </Col>
    </main>
  );
};

export default MainSection;
