import AboutStyle from "./AboutStyle";

export default function About() {
  return (
    <AboutStyle>
      <div className="container">
        <div className="media-icons">
          <ul>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest"></i>
            </a>
          </ul>
        </div>
      </div>
    </AboutStyle>
  );
}
