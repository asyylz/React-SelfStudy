import styled from "styled-components";

const Font =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap";
const peach = "#e5ae8a";
const dgreen = "#2c3834";
const white = "#f7f1e1";

const RegisterStyle = styled.div`
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Font};
  }

  ::selection {
    background: rgba(229, 174, 138, 0.5);
  }
  background-color: ;
  height: 100vh;

  .container {
    max-width: 40vw;
    min-width: 30vw;
    padding: 0 20px;
    margin: 170px auto;
  }

  .wrapper {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
  }

  .wrapper .title {
    line-height: 90px;
    background: ${dgreen};
    border-radius: 10px 10px 0 0;
    color: ${white};
    font-weight: 600;
    font-size: 30px;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .wrapper form {
    padding: 30px 25px 25px 25px;
  }

  .wrapper form .row {
    height: 45px;
    margin-bottom: 15px;
    position: relative;
  }

  .wrapper form .row input {
    height: 100%;
    width: 100%;
    padding-left: 60px;
    outline: none; /* Remove the default focus outline */
    border-radius: 5px;
    border: 1px solid lightgray;
    font-size: 16px;
    transition: all 0.3s ease; /* Apply a smooth transition for all properties over 0.3s */
  }

  ${'' /* form .row input:focus {
    border-color: ${peach};
    box-shadow: inset 0px 0px 5px 5px rgba(229, 174, 138, 0.7);
  } */}

  form .row input::placeholder {
    color: #999;
  }

  .wrapper form .row i {
    position: absolute;
    width: 47px;
    height: 100%;
    font-size: 18px;
    color: ${white};
    background: ${dgreen};
    border: 1px solid ${dgreen};
    border-radius: 5px 0 0 5px; /* only left side of the icons given radius */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper form .pass {
    margin: -8px 0 20px 0;
  }

  ${
    "" /* .wrapper form .pass a {
    color: ${white};
    text-decoration: none;
    font-size: 17px;
} */
  }

  ${'' /* .wrapper form .pass a:hover {
    text-decoration: underline;
  } */}

  .wrapper form .button input {
    color: rgba(177, 235, 228, 0.7);
    font-size: 20px;
    font-weight: 500;
    padding-left: 0; /* previous padding  from input canceled for this item to center it */
    background: ${dgreen};
    cursor: pointer;
    border: none;
    color: ${white};
  }

  form .button input:hover {
    background: ${white};
    color: ${dgreen};
    border:1px solid ${dgreen};
  }
  .error{
    position: absolute;
    top:-30px;
    color:red;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default RegisterStyle;
