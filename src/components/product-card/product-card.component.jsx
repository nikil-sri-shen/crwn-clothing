import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

import "./product-card.styles.scss";

import Button from "../button/button.component.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
