import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectProductsByCategoryWithSorting } from "../../redux/selectors/productsSelectors";
import ProductCard from "../ProductCard/ProductCard";
import Sorting from "../Sorting/Sorting";
import Button from "../Button/Button";
import './Products.scss';

const Products = ({ category }) => {
    const sortType = useSelector((state) => state.products.sortType);
    const products = useSelector(selectProductsByCategoryWithSorting(category, sortType));
    const [productsPresented, setProductsPresented] = useState(12);

    useEffect(() => {
        setProductsPresented(12);
    }, [category, sortType]);

    const showMoreProducts = () => {
        setProductsPresented(prevState => prevState + 12);
    }

    return (
        <div className="Products">
            <Sorting className="Products-Sorting"/>
            <div className="Products-List">
                {products
                    .slice(0, productsPresented)
                    .map(product =>
                        <ProductCard key={product.id} product={product}/>
                    )
                }
            </div>

            {products.length > productsPresented &&
                <Button className="Products-Button" onClick={showMoreProducts}>
                    Show more
                </Button>
            }
        </div>
    )
}

export default Products;