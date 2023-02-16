import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    background: linear-gradient(90deg, rgb(233, 228, 234)10%, rgb(3, 88, 125) 35%, rgb(227, 30, 122) 95%);

`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center; 
`;

export const NavLinksContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;
export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
        font-weight:  600;
        letter-spacing: 1px;
        opacity: 0.6;
        transition: 0.3s;
        &:hover
        {
          opacity:1; color:white
        }
`;
