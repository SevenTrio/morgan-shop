import React, { useState }  from 'react';
import { useSelector } from "react-redux";
import { ReactComponent as BasketIcon } from './ic_shopping_card.svg';
import IconButton from "../IconButton/IconButton";
import Button from "../Button/Button";
import './BasketAction.scss';

const BasketAction = ({ className = "" }) => {
    const basket = useSelector((state) => state.basket);
    const [basketPreviewOpen, setBasketPreviewOpen] = useState(false)

    const handleBasketPreviewOpen = () => {
        setBasketPreviewOpen(true);
    }

    const handleBasketPreviewClose = () => {
        setBasketPreviewOpen(false);
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
                data-basket-qty={basket.totalQty}
            />

            {basketPreviewOpen &&
                <div className="BasketAction-Preview">
                    <div className="BasketAction-PreviewContent">
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
                                        <span className="BasketAction-ProductСalcPrice">
                                            {"£" + Number(product.price) * product.qty}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <Button className="BasketAction-Button" variant="secondary">
                            Go to checkout
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default BasketAction;
