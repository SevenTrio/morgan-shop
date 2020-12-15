import React, { Fragment, useState }  from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasketTotalQuantity } from "../../redux/selectors/basketSelectors";
import { ReactComponent as BasketIcon } from './ic_shopping_card.svg';
import IconButton from "../IconButton/IconButton";
import Button from "../Button/Button";
import lampImage from "./lamp.svg"
import './BasketAction.scss';

const BasketAction = ({ className = "" }) => {
    let history = useHistory();
    const basket = useSelector((state) => state.basket);
    const basketTotalQty = useSelector(selectBasketTotalQuantity);
    const [basketPreviewOpen, setBasketPreviewOpen] = useState(false);

    const handleBasketPreviewOpen = () => {
        setBasketPreviewOpen(true);
    }

    const handleBasketPreviewClose = () => {
        setBasketPreviewOpen(false);
    }

    const handleGoToBasket = () => {
        setBasketPreviewOpen(false);
        history.push("/basket");
    }

    return (
        <div
            className={`BasketAction ${className}`}
            onMouseEnter={handleBasketPreviewOpen}
            onMouseLeave={handleBasketPreviewClose}
        >
            <IconButton
                icon={BasketIcon}
                className="BasketAction-Icon"
                onClick={handleGoToBasket}
                data-basket-qty={basketTotalQty}
            />

            {basketPreviewOpen &&
                <div className="BasketAction-Preview">
                    {basket.products.length
                        ?
                        <div className="BasketAction-PreviewContent">
                            <div className="BasketAction-Products">
                                {basket.products.map(product =>
                                    <div key={product.id} className="BasketAction-Product">
                                        <img src={product.image} alt="" className="BasketAction-ProductImage"/>
                                        <div className="BasketAction-ProductProps">
                                            <p className="BasketAction-ProductName">
                                                {product.name}
                                            </p>
                                            <div className="BasketAction-ProductPrice">
                                                <span className="BasketAction-ProductQty">
                                                    {product.qty + " x "}
                                                </span>
                                                <span className="BasketAction-ProductPriceValue">
                                                    {"£" + product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Button
                                className="BasketAction-Button"
                                onClick={handleGoToBasket}
                                variant="secondary"
                            >
                                Go to checkout
                            </Button>
                        </div>
                        :
                        <div className="BasketAction-PreviewContent">
                            <img src={lampImage} alt="" className="BasketAction-EmptyImage"/>
                            <p className="BasketAction-EmptyText">Your basket is empty</p>
                            <Button
                                className="BasketAction-Button"
                                onClick={handleBasketPreviewClose}
                                variant="secondary"
                            >
                                Continue shopping
                            </Button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default BasketAction;
