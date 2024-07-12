import { Col } from "react-bootstrap";

const SingleAlbum = ({ song }) => {
  return (
    <Col xs="12" sm="6" lg="4" xl="3" className="text-center imgLinks py-3">
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        track: {song.title} <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  );
};

export default SingleAlbum;
