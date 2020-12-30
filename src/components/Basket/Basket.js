import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToBasket,
    removeAllCopiesFromBasket,
    removeFromBasket,
} from "../../redux/actions/basketActions";
import Container from "../../components/Container/Container";
import PageHeading from "../../components/PageHeading/PageHeading";
import BasketProductCard from "../BasketProductCard/BasketProductCard";
import BasketSummary from "../BasketSummary/BasketSummary";
import "./Basket.scss"

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket);

    const handleAddToBasket = (product) => {
        dispatch(addToBasket(product))
    }

    const handleRemoveFromBasket = (product) => {
        dispatch(removeFromBasket(product))
    }

    const handleRemoveAllCopiesFromBasket = (product) => {
        dispatch(removeAllCopiesFromBasket(product))
    }

    return(
        <div className="Basket">
            <Container className="Basket-Container">
                <PageHeading className="Basket-Heading">Basket</PageHeading>
                <div className="Basket-Content">
                    <div className="Basket-Products">
                        {basket.products.map(product =>
                            <BasketProductCard
                                key={product.id}
                                product={product}
                                addToBasket={handleAddToBasket}
                                removeFromBasket={handleRemoveFromBasket}
                                removeAllCopiesFromBasket={handleRemoveAllCopiesFromBasket}
                            />
                        )}
                    </div>

                    <BasketSummary/>
                </div>
            </Container>
        </div>
    )
}

export default Basket