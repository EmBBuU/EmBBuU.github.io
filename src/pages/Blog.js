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
            width={350}
            height={350}
            alt="Kuva Mimmit koodaa ja Siilin workshopista"
          />
        </div>
        <div className="blogtext">
          <h5>27.2.2023</h5>
          <h2>Pientä esimakua kandista!</h2>
          <p>
            Tässä kirjoitelmassa keskeisessä osassa ovat tekoäly ja Chat GPT,
            joista varsinkin tekoäly voidaan määritellä monella eri tavalla,
            eikä sen määrittelyyn ole yhtä ainoaa tapaa. Myös tekoäly -nimitystä
            on alettu käyttämään entistä laajemmin, koska sen käyttö yleistyy
            jatkuvasti, eivätkä edes tekoälytutkijat käytä vain yhtä yleistä
            määritelmää. Tekoälyn määritelmän monimuotoisuutta on mielestäni
            onnistuttu hyvin kuvaamaan MinnaLearnin ja Helsingin yliopiston
            Elements of AI: Johdanto tekoälyyn -kurssimateriaalissa: ”Joillekin
            tekoälyssä on kyse keinotekoisista elämänmuodoista, jotka voivat
            ylittää ihmisen älykkyyden, kun taas toisille melkein mikä tahansa
            datan käsittely on tekoälyä.” Otetaan vielä kaksi konkreettisempaa
            esimerkkiä tekoälyn määrittelystä. Tekoäly.info -internet sivustolla
            tekoäly määritellään tietojenkäsittelytieteen osa-alueeksi, joka
            painottuu älykkäiden ohjelmien ja koneiden luontiin. Tekoälyn
            tarkoitus on yrittää matkia ihmistä, suorittaa tehtäviä kuten
            ihminen, tai yrittää matkia ihmisen tajuntaa. Euroopan parlamentin
            verkkosivuilla tekoälyn kuvataan tarkoittavan myös koneen kykyä
            matkia ihmistä, mutta nyt kyvyiksi on lueteltu ihmisen älyyn
            liitettäviä taitoja, kuten esimerkiksi oppimista, suunnittelemista,
            luomista ja päättelyä. Tekoälyjärjestelmät kuvataan järjestelmiksi,
            jotka kykenevät muokkaamaan käytöstään tiettyyn pisteeseen asti,
            aiempien suoritusten analysoimisen avulla ja toimimaan itsenäisesti.
          </p>
          <p>
            Toinen esimerkki oli Euroopan parlamentin sivuilta pienenä
            johdatteluna siihen, että Euroopan parlamentissa tämä määrittely on
            nyt todella ajankohtaista, sillä siellä on työstetty uutta
            tekoälysäädöstä, jonka tavoitteena on luoda yhtenäistä sääntelyä
            tekoälyn ympärille. Koska tässä tapauksessa työskennellään
            lainsäädöllisellä tasolla, on varmastikin yksi vaikeimmista
            kysymyksistä tekoälyn määrittely tarpeeksi kattavasti. Euroopan
            unionilla on tässä myös mahdollisuus päästä toimimaan
            suunnannäyttäjänä, mikäli tässä sääntelyssä ja sen soveltamisessa
            onnistutaan. Tätä kirjoitelmaa ajatellen keskeistä tässä
            tekoälysäädöksessä on alkuperäiseen ehdotukseen neuvoston
            käsittelyssä lisätyt säännökset, jotka koskevat yleiskäyttöisiä
            tekoälyjärjestelmiä, joihin kuuluu muun muassa Chat GPT . Toisena
            tärkeänä asiana säädöksessä kirjoitelmaani ajatellen on
            tiedonantovelvollisuus ja läpinäkyvyys. Ehdotus edellyttää
            tekoälyjärjestelmien läpinäkyvyyttä useissa eri yhteyksissä ja
            pyrkii varmistamaan, että käyttäjillä on riittävästi tietoa
            tekoälyjärjestelmien toiminnasta ja vaikutuksista.
          </p>
          <p>
            Ymmärtääkseen kaikkea tietoa mitä tekoälystä ja
            tekoälyjärjestelmistä on tarjolla, nousee tärkeäksi osaamisalaksi
            tekoälyn lukutaito, joka viittaa taitoon hyödyntää ja kriittisesti
            arvioida tekoälyteknologioita ja niiden vaikutuksia.
            Tekoälyteknologiat muovaavat ihmisten tapaa hankkia ja tutkia
            tietoa, mutta harva oikeasti ymmärtää niiden vaikutusta omassa
            tiedonhaussaan. Koska tekoäly todennäköisesti tulee vain
            lisääntymään ihmisten arjessa, nostavat Hirvonen ja Enwald esille
            ajatuksen tekoälyn lukutaidosta tulevaisuuden kansalaistaitona,
            jotta kaikilla olisi valmiudet ymmärtää tekoälyn eri sovelluksia ja
            toimia vastuullisesti niitä käyttäessään . He viittaavat
            artikkelissaan myös toiseen artikkeliin, jossa tarkasteltiin
            tekoälyn lukutaidon määritelmien käyttöä kirjallisuudessa. Artikkeli
            nostaa hyvin esiin neljä eri lukutaidon ulottuvuutta, jotka
            korostuivat kirjallisuutta tarkasteltaessa: ”ihmisten tietämys
            tekoälyteknologioista, tekoälykäsitteiden soveltaminen erilaisissa
            ympäristöissä ja tilanteissa, tekoälyn suunnitteluun ja arviointiin
            liittyvät näkökulmat, eettisiin näkökulmiin liittyvät asiat.”
          </p>
          <p>#kandi #johdanto #esimakua #tekoäly #chatgpt</p>
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
