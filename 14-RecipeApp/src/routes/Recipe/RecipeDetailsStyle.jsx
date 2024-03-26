import styled from "styled-components";
const dgreen = "#2c3834";
const cream = "#f6e6cb";
const dcream = "#eacea3";
const beige = "#cdad93";
const terracotta = "#b9816d";
const dterracotta = "#885444";
const peach = "#e5ae8a";

const primary = "hsl(14, 45%, 36%)";
const secondary = "hsl(332, 51%, 32%)";
const body = "hsl(30, 54%, 90%)";
const title = "hsl(24, 5%, 18%)";
const text = "hsl(30, 10%, 34%)";
const border = "hsl(30, 18%, 87%)";
const white = "hsl(0, 0%, 100%)";
const prepationBg = "hsl(330, 100%, 98%)";
const fontSize = "16px";
const outfit = "'Outfit', sans-serif";
const youngSerif = "'Young Serif', serif";



const RecipeDetailsStyle =styled.div`
background-color: ${beige};
margin-top:6rem;
${'' /* height:100vh; */}




html,
body {
  width: 100%;
  min-height: 100vh;
  background-color: var(--body-color);
  display: flex;
  justify-content: center;
}

body {
  padding: 50px 0;
}

main {
  width: 100%;
  max-width: 750px;
  padding: 2.5rem;
  background-color: var(--white);
  border-radius: 24px;
}

img {
  max-width: 100%;
  border-radius: 10px;
}

h1,
h2 {
  font-family: "Young Serif", serif;
}

h1 {
  margin: 1.5rem 0;
  color: var(--title-color);
  font-size: 2rem;
}

h2 {
  color: var(--primary-color);
}

p,
li {
  color: var(--text-color);
  font-family: "Outfit", sans-serif;
}

ul {
  margin-left: 0.5rem;
}

li {
  margin-left: 1rem;
  padding-left: 1rem;
  line-height: 1.7rem;
  list-style-position: outside;
}

li::marker {
  color: var(--primary-color);
  font-weight: 700;
}

th {
  font-family: "Outfit", sans-serif;
  font-weight: normal;
}

tr {
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
}

tr:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}

th,
td {
  flex: 1;
}

td {
  color: var(--primary-color);
  font-weight: 700;
}

span {
  color: var(--text-color);
  font-weight: 700;
}

.preparation-time {
  padding: 1rem;
  margin: 1rem 0;
  background-color: var(--prepation-bg);
  border-radius: 0.5rem;
}

.preparation-time > h2 {
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
}

section:not(:first-child) > h2 {
  margin-bottom: 1rem;
}

hr {
  margin: 2rem auto;
  border-bottom: 1px solid var(--border-color);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  text-align: left;
  color: var(--text-color);
  font-family: "Outfit", sans-serif;
}

@media (max-width: 768px) {
  body {
    padding: 0;
  }

  main {
    padding: 0;
    border-radius: 0;
  }

  img {
    border-radius: 0;
  }

  section {
    padding: 2rem;
  }

  hr {
    width: calc(100% - 4rem);
  }
}


`
export default RecipeDetailsStyle;