import styled from "styled-components";

const SidebarStyle = styled.div`
  /* Sidebar Menu Styles */
  .sidebar-menu {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 1rem;
    height: 100vh;
    background: rgba(160, 156, 156, 0.23);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
    border: 1px solid rgba(160, 156, 156, 0.2);
  }
  h4 {
    margin: 1rem;
  }

 
`;

export default SidebarStyle;
