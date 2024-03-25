import styled from "styled-components";
import background from "/public/background.jpg";

const ContainerHomeSSS = styled.div`
  height: 90vh;
  width: 100vw;
  margin-top: 6.2rem;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  ${"" /* background-attachment: fixed;  */}
  .wrapper {
    margin-top: 15rem;
  }
  .search-wrapper {
  }
`;

export default ContainerHomeSSS;
