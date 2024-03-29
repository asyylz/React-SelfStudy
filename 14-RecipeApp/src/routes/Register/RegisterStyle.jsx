import styled from "styled-components";
import background from "/public/bgRegister.avif";
const Font =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap";
const dgreen = "#2c3834";
const white = "#f7f1e1";

const RegisterStyle = styled.div`

  .wrapper .title span{ 
    color: ${white};
  }


  .wrapper form .row i {
    color: ${white};
    border: 1px solid ${dgreen};
  }

  .wrapper form .button input {
    color: rgba(177, 235, 228, 0.7);
    font-size: 20px;
    font-weight: 500;
    padding-left: 0;
    background: ${dgreen};
    cursor: pointer;
    border: none;
    color: ${white};
  }

  form .button input:hover {
    background: ${white};
    color: ${dgreen};
    border: 1px solid ${dgreen};
  }
  .error {
    position: absolute;
    top: -30px;
    color: red;
    font-size: 18px;
    font-weight: 500;
  }
 
`;

export default RegisterStyle;
