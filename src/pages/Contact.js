import React from "react";
import kuva3 from "./contact.png";

const Contact = () => {
  return (
    <div>
      <div className="Contact">
        <html>
          <body>
            <img className="imgContact" src={kuva3} alt="kasvokuva" />

            <div className="Contactinfo">
              <div className="Contactlist">
                <h4>
                  {" "}
                  <u>OTA YHTEYTTÄ TAI SEURAA SOMESSA:</u>{" "}
                </h4>
                <p>
                  <strong>LinkedIn:</strong>
                  <br />
                  <a href="https://www.linkedin.com/in/emilia-uurasjarvi/">
                    https://www.linkedin.com/in/emilia-uurasjarvi/
                  </a>
                </p>
                <strong>Instagram:</strong>
                <br />
                <a href="https://www.instagram.com/by_embbu/">
                  https://www.instagram.com/by_embbu/
                </a>
                <p>
                  <strong>Telegram:</strong> <br />
                  <a href="https://t.me/EmBBuu">https://t.me/EmBBuu</a>
                </p>
                <p>
                  <strong>Sähköposti:</strong> <br />
                  tmiemiliaeveliina@outlook.com
                </p>
              </div>
            </div>
          </body>
        </html>
      </div>
    </div>
  );
};

export default Contact;
