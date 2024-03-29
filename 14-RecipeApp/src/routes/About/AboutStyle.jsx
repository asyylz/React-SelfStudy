import styled from "styled-components";
import background from "/public/bgAbout.avif";
const font = "'Imbue', sans-serif";

const AboutStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;

  .container {
    background: rgba(160, 156, 156, 0.23);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
    border: 1px solid rgba(160, 156, 156, 0.2);
    padding-top: 10rem;
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .media-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .media-icons .icon {
    margin: 1rem;
    width: 80px;
    height: 80px;
    padding: 1rem;
    font-size: 2rem;
    color: #2c3e50;
    font-weight: 500;
    opacity: 0.7;
    transition: all 0.3s ease;
    border: 1px solid red;
    border-radius: 30%;
    cursor: pointer;
  }
  .media-icons .icon:hover {
    opacity: 1;
    scale: 1.2;
  }
  h1 {
    margin-top: 1rem;
    font-family: ${font};
    color: #2c3e50;
  }
`;
export default AboutStyle;
