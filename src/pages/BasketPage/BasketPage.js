import React from 'react';
import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket";
import OrderSuccessful from "../../components/OrderSuccessful/OrderSuccessful";
import BasketEmpty from "../../components/BasketEmpty/BasketEmpty";
import './BasketPage.scss';

const BasketPage = () => {
    const basket = useSelector((state) => state.basket);

    return (
        <div className="BasketPage">
            {basket.products.length
                ?
                <Basket/>
                :
                basket.isCheckedOut
                    ?
                    <OrderSuccessful/>
                    :
                    <BasketEmpty/>
            }
        </div>
    )
}

export default BasketPage;
