import React from "react";
import { API_HOST } from "../../config";
import { useSelector } from "react-redux";
import { selectCategoryById } from "../../redux/selectors/categoriesSelectors";
import { ReactComponent as CloseIcon } from "../../pages/BasketPage/ic_close.svg";
import IconButton from "../IconButton/IconButton";
import "./BasketProductCard.scss";

const BasketProductCard = ({ product, addToBasket, removeFromBasket, removeAllCopiesFromBasket }) => {
    const productCategory = useSelector(selectCategoryById(product.categoryId));

    return(
        <div className="BasketProductCard">
            <img src={API_HOST + product.image} alt={product.name} className="BasketProductCard-Image"/>
            <div className="BasketProductCard-Props">
                <p className="BasketProductCard-Category">{productCategory.title}</p>
                <p className="BasketProductCard-Name">{product.name}</p>
                <IconButton
                    icon={CloseIcon}
                    className="BasketProductCard-RemoveButton"
                    onClick={() => removeAllCopiesFromBasket(product)}
                />
                <div className="BasketProductCard-BottomLine">
                    <div className="BasketProductCard-Quantity">
                        <p className="BasketProductCard-QuantityTitle">Quantity</p>
                        <div className="BasketProductCard-QuantityActions">
                            <button className="BasketProductCard-QuantityButton" onClick={() => removeFromBasket(product)}>
                                <span className="BasketProductCard-QuantityButtonText">-</span>
                            </button>
                            <div className="BasketProductCard-QuantityValue">
                                <span className="BasketProductCard-QuantityValueText">
                                    {product.qty}
                                </span>
                            </div>
                            <button className="BasketProductCard-QuantityButton" onClick={() => addToBasket(product)}>
                                <span className="BasketProductCard-QuantityButtonText">+</span>
                            </button>
                        </div>
                    </div>
                    <p className="BasketProductCard-Price">{"£" + product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default BasketProductCard;