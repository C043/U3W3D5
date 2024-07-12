import SingleAlbum from "./SingleAlbum";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const SongSection = ({ artistName, id }) => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (resp.ok) {
        const data = await resp.json();
        setSongs(data.data.slice(0, 4));
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <Col xs="10">
      <section id={id}>
        <h2 className="text-light">{artistName}</h2>
        <Row>
          {songs.map(song => (
            <SingleAlbum key={song.id} song={song} />
          ))}
        </Row>
      </section>
    </Col>
  );
};

export default SongSection;
