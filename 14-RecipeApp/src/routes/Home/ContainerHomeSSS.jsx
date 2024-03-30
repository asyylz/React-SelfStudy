import styled from "styled-components";
import background from "/public/bgHome.avif";
const beige = "#cdad93";
const ContainerHomeSSS = styled.div`
  height: ${({ isfilled }) => (isfilled === "true" ? "" : "100vh")};
  width: 100vw;
  margin-top: 6.2rem;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  background-attachment: fixed;

  .wrapper {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  .wrapper h1 {
    text-align: center;
    color: #2c3834;
  }
  .search-wrapper {
    width: 90vw;
  }
  .result-wrapper {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 80vw;
    gap: 2rem;
    z-index: 0;
  }
  .recipe-card {
    color: #fff;
  }
  .icon {
    color: ${beige};
    font-size: 2.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
  @media (min-width: 1100px) {
    .search-wrapper {
      max-width: 60vw;
    }
  }
  @media (max-width: 500px) {
    .search-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default ContainerHomeSSS;
