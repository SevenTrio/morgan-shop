import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBasketCheckedOut } from "../../redux/actions/basketActions";
import { selectBasketProducts, selectBasketEstimatePrice } from "../../redux/selectors/basketSelectors";
import Hidden from "../Hidden/Hidden";
import Button from "../Button/Button";
import "./BasketSummary.scss";

const BasketSummary = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectBasketProducts);
    const estimatePrice = useSelector(selectBasketEstimatePrice);

    const handleSetBasketCheckedOut = () => {
        dispatch(setBasketCheckedOut())
    }
    
    return(
        <div className="BasketSummary">
            <div className="BasketSummary-Container">
                <Hidden smDown>
                    <p className="BasketSummary-Title">Order Summary</p>
                </Hidden>
                <ul className="BasketSummary-List">
                    <Hidden smDown>
                        {products.map(product =>
                            <li key={product.id} className="BasketSummary-ListItem">
                                <span className="BasketSummary-ProductName">
                                    {product.name}
                                </span>
                                <span className="BasketSummary-ProductPrice">
                                    {"£" + Number(product.price) * product.qty}
                                </span>
                            </li>
                        )}
                    </Hidden>
                    <li className="BasketSummary-ListItem">
                        <span className="BasketSummary-ProductName">
                            Express Delivery
                        </span>
                        <span className="BasketSummary-ProductPrice">
                            £10.00
                        </span>
                    </li>
                </ul>
                <p className="BasketSummary-Estimate">
                    <span className="BasketSummary-EstimateTitle">Estimated Total</span>
                    <span className="BasketSummary-EstimatePrice">{"£" + (estimatePrice + 10)}</span>
                </p>
                <Button
                    onClick={handleSetBasketCheckedOut}
                    className="BasketSummary-Button"
                    variant="secondary"
                >
                    Checkout
                </Button>

                <Hidden mdUp>
                    <Link
                        to="/"
                        className="BasketSummary-Link"
                    >
                        Continue shopping
                    </Link>
                </Hidden>
            </div>
        </div>
    )
}

export default BasketSummary;