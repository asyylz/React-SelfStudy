import styled from "styled-components";
const dgreen = "#2c3834";
const SidebarStyle = styled.div`
  /* Sidebar Menu Styles */
  .sidebar-menu {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 1rem;
    height: 100%;
    background: rgba(160, 156, 156, 0.7);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
    border: 1px solid rgba(160, 156, 156, 0.2);
  }
  h4 {
    margin: 1rem;
  }

  li {
    margin-top: 6px;
    padding: 14px;
    transition: all 0.3s linear;
    list-style:none;
    border-bottom: 1px solid red;
  }
  a {
    font-size: 20px;
    text-decoration: none;
  }

  i {
    ${'' /* color: ${dgreen}; */}
    color: #fff;
    font-size: 20px;
   
  }

  li:hover {
    border-left: 1px solid ${dgreen};
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
    border-bottom:1px solid yellow;
  }
`;

export default SidebarStyle;
