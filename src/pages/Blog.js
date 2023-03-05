import blog1 from "./blogikuva_1.png";
import blog2 from "./blogikuva_2.png";

const Blog = () => {
  return (
    <html>
      <body className="blogi">
        <h1 id="sivualku" className="blogheader">
          Tervetuloa Blogiini!
        </h1>
        <div className="blogtext">
          <h5>28.2.2023</h5>
          <h2>Mimmit Koodaa X Siili -workshop</h2>

          <p>
            Helmikuu on kyllä mennyt ihan yhdessä hujauksessa 😱 Ja harkka
            lähestyy kovaa vauhtia, enään kuukausi aikaa ennkuin se alkaa!
            😳🤩🙊 Tämä kuukausi on menny kyllä hyvin vahvasti kouluhommia
            tehdessä ja niin taitaa seuraavakin mennä, että saa mahdollisimman
            hyvään malliin koulujutut ennen kuin harkka alkaa. Jos yhden noston
            tältä kuukaudelta tekisin, olisi se @mimmitkoodaa ja @siilisolutions
            data & analytiikka -workshop, joka oli inspiroiva ja vahvitsi miun
            ajatusta siitä, että datapuoli on se mikä minua eniten kiinnostaa!
            Tuntuu todella uskomattomalta, että kohta oon harjoittelussa tuon
            porukan joukossa, can't wait! 🤩🤩{" "}
          </p>
          <p>
            #mimmitkoodaapohjoiskarjala #mimmitkoodaa #siilisolutions #data
            #workshop
          </p>
          <img
            className="img1"
            src={blog1}
            alt="Kuva Mimmit koodaa ja Siilin workshopista"
          />
          <img
            className="img2"
            src={blog2}
            width={400}
            height={350}
            alt="Kuva Mimmit koodaa ja Siilin workshopista"
          />
        </div>
        <div className="blogtext">
          <h5>25.2.2023</h5>
          <h2>Tervetuloa Blogiini!</h2>
          <p>
            Tosiaan tervetuloa lukemaan kuulumisiani tänne blogin puolelle. Olen
            käyttänyt tähän asti instagramiani "blogina" opiskeluiden suhteen,
            ja niin tapahtuu jatkossakin, ja varmaan ahkerampaa päivittämistä
            tapahtuu instagramin puolella, joten kannattaa se laittaa
            seuraantaan!
            <a href="https://www.instagram.com/by_embbu/">
              https://www.instagram.com/by_embbu/
            </a>
          </p>
          <p>#blogi #blog</p>
          <button className="btnUp">
            <a href="#sivualku">Sivun alkuun</a>
          </button>
        </div>
      </body>
    </html>
  );
};

export default Blog;
