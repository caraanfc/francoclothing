import { Outlet, Link} from "react-router-dom";
import { Fragment, useContext } from "react";
import {ReactComponent as Crwnlogo} from '../../assets/fc.svg'
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)
   

    return(
        <Fragment>  
            <NavigationContainer>
                <LogoContainer to ='/'>
                    <Crwnlogo className="logo"/>
                </LogoContainer>
               <NavLinksContainer>
                    <NavLink to ='/shop'>
                        SHOP
                    </NavLink>
                        {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>
                            {''}
                        Sign Out {''}
                        </NavLink>)
                                : (<NavLink to ='/auth'>SIGN-IN</NavLink>)
                        }   
                        <CartIcon />                                           
               </NavLinksContainer>
               {isCartOpen && <CartDropdown />}
               </NavigationContainer>
            <Outlet />
        </Fragment>
    
    )
}

export default Navigation;