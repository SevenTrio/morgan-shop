import React from 'react';
import { API_HOST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeAllCopiesFromBasket } from "../../redux/actions/basketActions";
import { selectBasketProducts } from "../../redux/selectors/basketSelectors";
import SwitchAddRemoveButton from "../SwitchAddRemoveButton/SwitchAddRemoveButton";
import ProductImage from "../ProductImage/ProductImage";
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
            <ProductImage
                src={API_HOST + product.image}
                alt={product.name}
                className="ProductCard-Image"
            />

            <SwitchAddRemoveButton
                className="ProductCard-Button"
                isRemove={isProductInBasket}
                onClick={() => handleToggleButton(product)}
            />

            <div className="ProductCard-Props">
                <p className="ProductCard-Name">{product.name}</p>
                <p className="ProductCard-Price">{"£" + product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard