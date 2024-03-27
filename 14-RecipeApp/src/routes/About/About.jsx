import AboutStyle from "./AboutStyle";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";

export default function About() {
  return (
    <AboutStyle>
      <div className="container">
        <div className="media-icons">
          <ul>
            <a href="https://www.instagram.com/asyylzz" target="blank">
              <AiOutlineInstagram className="icon" />
            </a>
            <a
              href="https://linkedin.com/in/asiye-yaliz-8b834922b"
              target="blank"
            >
              <AiOutlineLinkedin className="icon" />
            </a>
            <a href="https://github.com/asyylz" target="blank">
              <AiFillGithub className="icon" />
            </a>
          </ul>
          <h1>Asiye Yaliz</h1>
        </div>
      </div>
    </AboutStyle>
  );
}
