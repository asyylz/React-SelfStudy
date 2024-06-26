import styled from "styled-components";
import background from "/public/bgFav.avif";
const dgreen = "#2c3834";

export const FavRecipesStyle = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  background-image: url(${background});
  height: 100vh;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    min-width: 320px;
  }
`;

export const RecipeContainerStyle = styled.div`
  margin: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  height: 100%;
  background: rgba(160, 156, 156, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(160, 156, 156, 0.2);

  .recipe-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin: 2rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 20px;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 20px;
    border: 2px solid red;
  }
  h1,
  h2 {
    color: ${dgreen};
    border-bottom: 1px solid red;
    margin-top: 2rem;
  }

  table {
    width: 100%;
  }

  tr {
    padding: 0.8rem 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${dgreen};
  }
  @media (max-width: 700px) {
    .recipe-wrapper {
      display: grid;
      grid-template-columns: 1fr;
    }
    img {
      heigth: 200px;
      width: 200px;
    }
  }
`;
