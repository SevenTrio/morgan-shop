import React, { Fragment } from 'react';
import { API_HOST } from "../../config";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketEstimatePrice } from "../../redux/selectors/basketSelectors";
import {
    addToBasket,
    removeFromBasket,
    removeAllCopiesFromBasket,
    setBasketCheckedOut,
} from "../../redux/actions/basketActions";
import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import Button from "../Button/Button";
import Hidden from "../Hidden/Hidden";
import lampImage from './lamp.svg';
import glowingLampImage from './glowing_lamp.svg';
import { ReactComponent as CloseIcon } from './ic_close.svg';
import './Basket.scss';


const Basket = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket);
    const estimatePrice = useSelector(selectBasketEstimatePrice);

    const handleAddToBasket = (product) => {
        dispatch(addToBasket(product))
    }

    const handleRemoveFromBasket = (product) => {
        dispatch(removeFromBasket(product))
    }

    const handleRemoveAllCopiesFromBasket = (product) => {
        dispatch(removeAllCopiesFromBasket(product))
    }

    const handleSetBasketCheckedOut = () => {
        dispatch(setBasketCheckedOut())
    }

    const handleGoToHome = () => {
        history.push("/")
    }

    return (
        <div className="Basket">
            {basket.products.length ?
                <Fragment>
                    <h1 className="Basket-Heading">Basket</h1>
                    <div className="Basket-Content">
                        <div className="Basket-Products">
                            {basket.products.map(product =>
                                <div key={product.id} className="Basket-Product">
                                    <img src={API_HOST + product.image} alt={product.name} className="Basket-ProductImage"/>
                                    <div className="Basket-ProductProps">
                                        <p className="Basket-ProductCategory">Table lamp</p>
                                        <p className="Basket-ProductName">{product.name}</p>
                                        <IconButton
                                            icon={CloseIcon}
                                            className="Basket-ProductRemoveButton"
                                            onClick={() => handleRemoveAllCopiesFromBasket(product)}
                                        />
                                        <div className="Basket-ProductBottomLine">
                                            <div className="Basket-Quantity">
                                                <p className="Basket-QuantityTitle">Quantity</p>
                                                <div className="Basket-QuantityActions">
                                                    <button className="Basket-QuantityButton" onClick={() => handleRemoveFromBasket(product)}>
                                                        <span className="Basket-QuantityButtonText">-</span>
                                                    </button>
                                                    <div className="Basket-QuantityValue">
                                                        <span className="Basket-QuantityValueText">
                                                            {product.qty}
                                                        </span>
                                                    </div>
                                                    <button className="Basket-QuantityButton" onClick={() => handleAddToBasket(product)}>
                                                        <span className="Basket-QuantityButtonText">+</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="Basket-ProductPrice">{"£" + product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="Basket-Summary">
                            <div className="Basket-SummaryContainer">
                                <Hidden smDown>
                                    <p className="Basket-SummaryTitle">Order Summary</p>
                                </Hidden>
                                <ul className="Basket-SummaryList">
                                    <Hidden smDown>
                                        {basket.products.map(product =>
                                            <li key={product.id} className="Basket-SummaryListItem">
                                                <span className="Basket-SummaryProductName">
                                                    {product.name}
                                                </span>
                                                <span className="Basket-SummaryProductPrice">
                                                    {"£" + Number(product.price) * product.qty}
                                                </span>
                                            </li>
                                        )}
                                    </Hidden>
                                    <li className="Basket-SummaryListItem">
                                        <span className="Basket-SummaryProductName">
                                            Express Delivery
                                        </span>
                                        <span className="Basket-SummaryProductPrice">
                                            £10.00
                                        </span>
                                    </li>
                                </ul>
                                <p className="Basket-Estimate">
                                    <span className="Basket-EstimateTitle">Estimated Total</span>
                                    <span className="Basket-EstimatePrice">{"£" + (estimatePrice + 10)}</span>
                                </p>
                                <Button
                                    onClick={handleSetBasketCheckedOut}
                                    className="Basket-Button"
                                    variant="secondary"
                                >
                                    Checkout
                                </Button>

                                <Hidden mdUp>
                                    <Link
                                        to="/"
                                        className="Basket-Link"
                                    >
                                        Continue shopping
                                    </Link>
                                </Hidden>
                            </div>
                        </div>
                    </div>
                </Fragment>
                :
                basket.isCheckedOut
                ?
                <div className="Basket-OrderSuccessful">
                    <h1 className="Basket-Heading">Thank you!</h1>
                    <img src={glowingLampImage} alt="" className="Basket-OrderSuccessfulImage"/>
                    <p className="Basket-OrderSuccessfulTitle">Your ordering is completely successful!</p>
                    <p className="Basket-OrderSuccessfulText">We'll let you know when it ships and it headed your way.</p>
                    <div className="Basket-OrderInfo">
                        <p className="Basket-Order">
                            Order:
                            <span className="Basket-OrderValue">0844253425</span>
                        </p>
                        <p className="Basket-DateOrder">
                            Date order:
                            <span className="Basket-DateOrderValue">16/12/20</span>
                        </p>
                    </div>
                    <Button
                        onClick={handleGoToHome}
                        className="Basket-Button"
                    >
                        Continue shopping
                    </Button>
                </div>
                :
                <div className="Basket-Empty">
                    <h1 className="Basket-Heading">Basket</h1>
                    <img src={lampImage} alt="" className="Basket-EmptyImage"/>
                    <p className="Basket-EmptyText">Your basket is empty</p>
                    <Button
                        onClick={handleGoToHome}
                        className="Basket-Button"
                        variant="secondary"
                    >
                        Start shopping
                    </Button>
                </div>
            }
        </div>
    )
}

export default Basket;
