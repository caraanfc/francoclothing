import styled from "styled-components";
import {ReactComponent as ShoppingSvg} from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
width: 35px;
height: 35px;
opacity: 0.6;
transition: 0.3s;

&:hover {opacity:1;}
`
export const CartIconContainer = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const ItemCount = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 12px;
`


   
  