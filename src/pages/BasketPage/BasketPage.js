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
import IconButton from "../../components/IconButton/IconButton";
import Button from "../../components/Button/Button";
import Hidden from "../../components/Hidden/Hidden";
import lampImage from './lamp.svg';
import glowingLampImage from './glowing_lamp.svg';
import { ReactComponent as CloseIcon } from './ic_close.svg';
import './BasketPage.scss';


const BasketPage = () => {
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
        <div className="BasketPage">
            {basket.products.length ?
                <Fragment>
                    <h1 className="BasketPage-Heading">Basket</h1>
                    <div className="BasketPage-Content">
                        <div className="BasketPage-Products">
                            {basket.products.map(product =>
                                <div key={product.id} className="BasketPage-Product">
                                    <img src={API_HOST + product.image} alt={product.name} className="BasketPage-ProductImage"/>
                                    <div className="BasketPage-ProductProps">
                                        <p className="BasketPage-ProductCategory">Table lamp</p>
                                        <p className="BasketPage-ProductName">{product.name}</p>
                                        <IconButton
                                            icon={CloseIcon}
                                            className="BasketPage-ProductRemoveButton"
                                            onClick={() => handleRemoveAllCopiesFromBasket(product)}
                                        />
                                        <div className="BasketPage-ProductBottomLine">
                                            <div className="BasketPage-Quantity">
                                                <p className="BasketPage-QuantityTitle">Quantity</p>
                                                <div className="BasketPage-QuantityActions">
                                                    <button className="BasketPage-QuantityButton" onClick={() => handleRemoveFromBasket(product)}>
                                                        <span className="BasketPage-QuantityButtonText">-</span>
                                                    </button>
                                                    <div className="BasketPage-QuantityValue">
                                                        <span className="BasketPage-QuantityValueText">
                                                            {product.qty}
                                                        </span>
                                                    </div>
                                                    <button className="BasketPage-QuantityButton" onClick={() => handleAddToBasket(product)}>
                                                        <span className="BasketPage-QuantityButtonText">+</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="BasketPage-ProductPrice">{"£" + product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="BasketPage-Summary">
                            <div className="BasketPage-SummaryContainer">
                                <Hidden smDown>
                                    <p className="BasketPage-SummaryTitle">Order Summary</p>
                                </Hidden>
                                <ul className="BasketPage-SummaryList">
                                    <Hidden smDown>
                                        {basket.products.map(product =>
                                            <li key={product.id} className="BasketPage-SummaryListItem">
                                                <span className="BasketPage-SummaryProductName">
                                                    {product.name}
                                                </span>
                                                <span className="BasketPage-SummaryProductPrice">
                                                    {"£" + Number(product.price) * product.qty}
                                                </span>
                                            </li>
                                        )}
                                    </Hidden>
                                    <li className="BasketPage-SummaryListItem">
                                        <span className="BasketPage-SummaryProductName">
                                            Express Delivery
                                        </span>
                                        <span className="BasketPage-SummaryProductPrice">
                                            £10.00
                                        </span>
                                    </li>
                                </ul>
                                <p className="BasketPage-Estimate">
                                    <span className="BasketPage-EstimateTitle">Estimated Total</span>
                                    <span className="BasketPage-EstimatePrice">{"£" + (estimatePrice + 10)}</span>
                                </p>
                                <Button
                                    onClick={handleSetBasketCheckedOut}
                                    className="BasketPage-Button"
                                    variant="secondary"
                                >
                                    Checkout
                                </Button>

                                <Hidden mdUp>
                                    <Link
                                        to="/"
                                        className="BasketPage-Link"
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
                <div className="BasketPage-OrderSuccessful">
                    <h1 className="BasketPage-Heading">Thank you!</h1>
                    <img src={glowingLampImage} alt="" className="BasketPage-OrderSuccessfulImage"/>
                    <p className="BasketPage-OrderSuccessfulTitle">Your ordering is completely successful!</p>
                    <p className="BasketPage-OrderSuccessfulText">We'll let you know when it ships and it headed your way.</p>
                    <div className="BasketPage-OrderInfo">
                        <p className="BasketPage-Order">
                            Order:
                            <span className="BasketPage-OrderValue">0844253425</span>
                        </p>
                        <p className="BasketPage-DateOrder">
                            Date order:
                            <span className="BasketPage-DateOrderValue">16/12/20</span>
                        </p>
                    </div>
                    <Button
                        onClick={handleGoToHome}
                        className="BasketPage-Button"
                    >
                        Continue shopping
                    </Button>
                </div>
                :
                <div className="BasketPage-Empty">
                    <h1 className="BasketPage-Heading">Basket</h1>
                    <img src={lampImage} alt="" className="BasketPage-EmptyImage"/>
                    <p className="BasketPage-EmptyText">Your basket is empty</p>
                    <Button
                        onClick={handleGoToHome}
                        className="BasketPage-Button"
                        variant="secondary"
                    >
                        Start shopping
                    </Button>
                </div>
            }
        </div>
    )
}

export default BasketPage;
