import "./Footer.css";

function Footer() {
  return (
    <div className="Main-footer">
      <div className="Links">
        <div className="social-links">
          <ul>
            <h2 className="ciao">Social links</h2>
            <li><a href="/">TikTok</a></li>
            <li><a href="/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="Contatti">
        <ul className="link-contatti">
          <h2 id="yee">Contatti</h2>
          <li id="margin">Numero di telefono 0654823917</li>
          <li>Email flyscanner@fs.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;