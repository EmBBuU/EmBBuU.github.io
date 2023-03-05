import React from "react";
import kuva1 from "./cv.png";
import kuva2 from "./Podcast.png";
import ReactPlayer from "react-player/youtube";
import asdf from "./cv.pdf";

const Cv = () => {
  return (
    <div className="Portfolio">
      <div>
        <img className="imgCv" src={kuva1} alt="kuva CV:stä" />

        <div className="Youtube">
          <p>
            Olen ollut myös puhujana #MimmitKoodaa webinaarissa: Kurkistus
            teknologia-alalle. <br />
            Olin kertomassa kokemuksia uuden oppimisesta alanvaihtajan
            näkökulmasta. Kokemuksena tämä oli todella mahtava ja todellakin
            voisin tehdä tuon uudestaan!
          </p>
          <div className="player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=KHwjU_iG3D0&t=1963s"
              width={450}
              height={350}
            />
          </div>
        </div>
        <div className="Spotify">
          <p>
            Olen myös ollut puhumassa alanvaihdostani Podcastissa "Kaiken
            maailman Karjalaiset - Uuden edessä". <br />
            Tämä oli myös loistava ja erilainen kokemus, tämänkin voisin tehdä
            tuon uudestaan koska vaan!
          </p>
          <a href="https://open.spotify.com/episode/7j6QcD3Yuf68CFEJco7dJD?si=cdb42b0492bd4fb4">
            <img src={kuva2} width={300} height={200} alt="linkki Spotifyyn" />
          </a>
        </div>
        <button className="btnLoad">
          <a href={asdf}>Avaa CV pdf-muodossa</a>
        </button>
      </div>
    </div>
  );
};

export default Cv;
