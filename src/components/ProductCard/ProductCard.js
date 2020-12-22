import React, { useState } from 'react';
import { API_HOST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeAllCopiesFromBasket } from "../../redux/actions/basketActions";
import { selectBasketProducts } from "../../redux/selectors/basketSelectors";
import SwitchAddRemoveButton from "../SwitchAddRemoveButton/SwitchAddRemoveButton";
import fallbackImage from "./fallback_lamp_image.jpg"
import './ProductCard.scss'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const basketProducts = useSelector(selectBasketProducts);
    const isProductInBasket = basketProducts.some(item => item.id === product.id);
    const [isImageLoaded, setImageLoaded] = useState(false);
    const [isImageError, setImageError] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true)
    }

    const handleImageError = () => {
        setImageError(true);
    }

    const handleToggleButton = (product) => {
        isProductInBasket
            ? dispatch(removeAllCopiesFromBasket(product))
            : dispatch(addToBasket(product))
    }

    return (
        <div className="ProductCard">
            <div className="ProductCard-ImageWrapper">
                <img
                    src={isImageError ? fallbackImage : API_HOST + product.image}
                    alt={product.name}
                    className={`ProductCard-Image ${!isImageLoaded ? "ProductCard-Image_loading" : ""}`}
                    onLoad={handleImageLoaded}
                    onError={handleImageError}
                />
            </div>

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