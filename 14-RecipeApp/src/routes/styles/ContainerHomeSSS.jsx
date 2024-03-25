import styled from "styled-components";
import background from "/public/background.jpg";

const ContainerHomeSSS = styled.div`
  height: 100%;
  width: 100vw;
  margin-top: 6.2rem;
  ${
    "" /* background-image: url(${background});
  background-size: cover; */
  }
  background-color:#e5ae8a;
  display: flex;
  justify-content: center;
  ${"" /* background-attachment: fixed;  */}
  .wrapper {
    margin-top: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper h1 {
    text-align: center;
  }
  .search-wrapper {
    width: 45vw;
  }
  .result-wrapper {
    margin:2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 80vw;
    gap: 2rem;
    z-index:0;
  }
  .recipe-card {
    color: #fff;
  }
`;

export default ContainerHomeSSS;
