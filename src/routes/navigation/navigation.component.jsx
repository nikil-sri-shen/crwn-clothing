import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrrentUser } from "../../store/user/user.selector";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const currentUser = useSelector(selectCurrrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
