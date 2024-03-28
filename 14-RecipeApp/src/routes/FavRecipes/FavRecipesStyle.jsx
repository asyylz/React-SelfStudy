import styled from "styled-components";
import background from "/public/bgFav.avif";

export const FavRecipesStyle = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  background-image: url(${background});
`;

export const RecipeContainerStyle = styled.div`
  margin: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  height: 100vh;
  background: rgba(160, 156, 156, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(160, 156, 156, 0.2);
`;
