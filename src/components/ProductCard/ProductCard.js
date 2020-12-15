import React from 'react';
import SwitchAddRemoveButton from "../SwitchAddRemoveButton/SwitchAddRemoveButton";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeAllCopiesFromBasket } from "../../redux/actions/basketActions";
import { selectBasketProducts } from "../../redux/selectors/basketSelectors";
import './ProductCard.scss'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const basketProducts = useSelector(selectBasketProducts);
    const isProductInBasket = basketProducts.some(item => item.id === product.id);

    const handleToggleButton = (product) => {
        isProductInBasket
            ? dispatch(removeAllCopiesFromBasket(product))
            : dispatch(addToBasket(product))
    }

    return (
        <div className="ProductCard">
            <img src={product.image} alt={product.name} className="ProductCard-Image"/>
            <SwitchAddRemoveButton
                className="ProductCard-Button"
                isRemove={isProductInBasket}
                onClick={() => handleToggleButton(product)}
            />
            <p className="ProductCard-Name">{product.name}</p>
            <p className="ProductCard-Price">{"£" + product.price}</p>
        </div>
    )
}

export default ProductCard