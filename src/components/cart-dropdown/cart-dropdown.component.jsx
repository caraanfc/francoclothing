import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom'; // allow to navigate function

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => { // in here, you will be able to navigate to checkout page
        navigate('/checkout'); // file
    }   
    
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) =>(
                        <CartItem key={item.id} cartItem={item} /> 
                        ))) : (
                            <EmptyMessage>Your cart is empty!</EmptyMessage>
                        )
                }
              
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown