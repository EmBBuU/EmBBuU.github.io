import React from "react";
import naama from "./naama.png";

function Home() {
  return (
    <div>
      <h1 className="homeheader">
        Hei...
        <br /> &emsp; &emsp; &emsp; ja tervetuloa nettisivuilleni!
      </h1>
      <div className="Home">
        <img
          className="imgHome"
          src={naama}
          width={500}
          height={500}
          alt="kasvokuva"
        />

        <p>
          Olen Emilia Uurasjärvi (os. Lammi) ja olen alanvaihtaja, entinen
          parturi-kampaaja, nykyinen tietojenkäsittelytieteen opiskelija.{" "}
        </p>
        <p>
          Olen syntyjään Ikaalisista, mutta nyt on tullut asusteltua Joensuussa
          jo lähemmäs kymmenen vuotta! Tällä hetkellä kirjoitan kandin
          tutkielmaa, ja syksylle olisi jäämässä enää muutama sivuainekurssi,
          joten toivottavasti jouluun mennessä olisi kandin paperit kädessä! :D{" "}
        </p>
        <p>
          Nämä nettisivut olen tehnyt osana yhtä koulun kurssia (web- ja
          mobiilikäyttöliittymät) ja tavoitteena oli tehdä sivut niin hyvin,
          että ne voisin käyttöön jättää, osaksi omaa portfoliotani. Ja
          portfoliosta puheenollen, CV:n ja linkin GitHubiini (sekä hieman
          muutakin) löydät omalta välilehdeltään.
        </p>
        <p>
          Tykkään olla aktiivisesti kaikessa mukana ja olenkin jo toista vuotta
          ainejärjestömme Skripti ry:n hallituksessa toisena
          yhteistyövastaavana, sekä olen ollut myös paljon mukana Mimmit
          Koodaa-toiminnassa. Jotain pientä on aina kiva olla työn alla, niin ei
          kerkeä tulla tylsää tai iskeä tekemisen puute! Vapaa-ajallani
          osallistun siis ainejärjestömme toimintaan ja sen kehittämiseen, sekä
          mm. mimmit koodaa -tapahtumiin. Teen myös paljon erilaisia käsitöitä
          ja niistä on milloin minkäkin lainen projekti menossa ja kesken. Myös
          lauta- ja videopelejä tulee pelailtua ja kissaa rapsuteltua
          aktiivisesti, kun se on sellainen sylissä erittäin hyvin viihtyvä
          tapaus.
        </p>
        <br />
        <table>
          <h2>Koulutuspolkuni ja työhistoriani lyhyesti:</h2>
          <ul>
            <li>Ikaalisten yhteiskoulun lukio - 2008–2011</li>
            <li>
              Ikaalisten käsi- ja taideteollisuusoppilaitos, artesaani -
              2011–2013
            </li>
            <li>
              Pohjois-Karjalan koulutuskuntayhtymä, parturi-kampaaja - 2014–2016
            </li>
            <li>Ykköspaikka Ky, Tmi Emilia Eveliina 2/2015–7/2018</li>
            <li>Savon ammattiopisto, ekokampaaja-koulutus - 2017–2018</li>
            <li>PKO, S-parturi-kampaamo Prisma 8/2018–2/2021</li>
            <li>
              Itä-Suomen yliopisto, tietojenkäsittelytiede - 2021-nykyhetki
            </li>
          </ul>
        </table>
      </div>
    </div>
  );
}
export default Home;
