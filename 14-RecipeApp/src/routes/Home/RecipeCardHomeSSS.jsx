import styled from "styled-components";

// Define variables as JavaScript template literals
const white = "#f7f1e1";
const cream = "#f6e6cb";
const dcream = "#eacea3";
const beige = "#cdad93";
const terracotta = "#b9816d";
const dterracotta = "#885444";
const peach = "#e5ae8a";
const orange = "#bf835a";
const green = "#4b5243";
const dgreen = "#2c3834";

const mono = "source-code-pro";
const display = "lust-sans";

const RecipeCardHomeSSS = styled.div`
  body {
    margin: 100px;
    padding: 0px;
    background: ${beige}; /* Using the variable */
  }

  .minip {
    width: 300px;
    height: 450px;
    margin: auto;
    background: ${white};
    position: relative;
    box-shadow: 0px 0px 5px ${terracotta}; /* Using the variable */
  }

  .minip .mg {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0px;
    left: 0px;
    display: grid;
    grid-template-columns: 250px 50px;
    grid-template-rows: 100px 150px;
    grid-template-areas:
      "clr group"
      "clr .....";
    transition: grid-template-columns 0.6s linear,
      grid-template-rows 0.6s linear;
  }
  .minip:hover .mg {
    grid-template-columns: 150px 150px;
    grid-template-rows: 50px 300px;
    transition: grid-template-columns 0.6s linear,
      grid-template-rows 0.6s linear;
  }
  .minip .mg .clr {
    grid-area: clr;
    height: 400px;
    background: ${green};
  }
  .minip .mg .group {
    font: 10px/10px ${mono};
    text-transform: uppercase;
    letter-spacing: 1px;
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .minip .mg .group span {
    display: block;
    transform: rotate(180deg);
    transition: transform 0.6s linear;
  }
  .minip:hover .mg .group span {
    transform: rotate(270deg);
    transition: transform 0.6s linear;
  }

  .minip .av {
    border: 15px solid ${peach};
    width: 200px;
    height: 350px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: ${green};
    background-position: top center;
    background-size: cover;
    transition: width 0.6s linear, height 0.6s linear;
  }
 
  .minip:hover .av {
    width: 250px;
    height: 400px;
    transition: width 0.6s linear, height 0.6s linear;
  }

  .minip .info {
    width: 200px;
    max-height: 200px;
    padding: 25px;
    position: absolute;
    bottom: 100px;
    left: 0px;
    background: ${peach};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: flex-start;
    transition: bottom 0.6s linear;
  }
  .minip:hover .info {
    bottom: 50px;
    transition: bottom 0.6s linear;
  }
  .minip .info h3 {
    display: block;
    ${"" /* font: 16px/20px ${mono}; */}
    font: 200 15px/25px ${display};
    text-indent: -25px;
    margin: 0 6px;
  }

  .minip a.plot {
    width: 110px;
    height: 30px;
    position: absolute;
    bottom: 85px;
    left: 85px;
    background: ${dgreen};
    font: 10px/10px ${mono};
    text-transform: uppercase;
    color: ${white};
    text-decoration: none;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: bottom 0.6s linear;
  }
  .minip:hover a.plot {
    bottom: 35px;
    transition: bottom 0.6s linear;
  }
`;

export default RecipeCardHomeSSS;
