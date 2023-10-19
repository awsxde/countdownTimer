import iconFacebook from "../assets/images/icon-facebook.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";

export default function Logos() {
  return (
    <div className="logosContainer">
      <img src={iconFacebook} alt="logo" />
      <img src={iconPinterest} alt="logo" />
      <img src={iconInstagram} alt="logo" />
    </div>
  );
}
