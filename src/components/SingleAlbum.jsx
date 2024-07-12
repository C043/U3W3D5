import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectAction } from "../redux/actions";

const SingleAlbum = ({ song }) => {
  const dispatch = useDispatch();
  return (
    <Col
      xs="12"
      sm="6"
      lg="4"
      xl="3"
      className="text-center imgLinks py-3"
      onClick={() => dispatch(selectAction(song))}
    >
      <img type="button" className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        track: {song.title} <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  );
};

export default SingleAlbum;
