import React, { useEffect } from 'react';
import { useBreakpoints } from "../../customHooks/useBreakpoints";
import { useStateWithCallback } from "../../customHooks/useStateWithCallback";
import { useSelector } from "react-redux";
import { selectProductsByCategoryWithSorting } from "../../redux/selectors/productsSelectors";
import ProductCard from "../ProductCard/ProductCard";
import Sorting from "../Sorting/Sorting";
import Button from "../Button/Button";
import './Products.scss';

const Products = ({ category, className = "" }) => {
    const { breakMdDown, breakSmDown } = useBreakpoints();
    const sortType = useSelector((state) => state.products.sortType);
    const products = useSelector(selectProductsByCategoryWithSorting(category, sortType));
    const [productsPresented, setProductsPresented] = useStateWithCallback(12);

    const handleScroll = () => {
        let scrollIndent = 24 + 43 + 16;                    /* button mt + button h + page pb */
        if (breakMdDown) scrollIndent = 65 + 24 + 43 + 16;  /* header h + button mt + button h + page pb */
        if (breakSmDown) scrollIndent = 48 + 12 + 38 + 6;   /* header h + button mt + button h + page pb */

        window.scrollBy({
            top: document.documentElement.clientHeight - scrollIndent,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        setProductsPresented(12);
    }, [category, sortType]);

    const showMoreProducts = () => {
        setProductsPresented(
            prevState => prevState + 12,
            handleScroll
        )
    }

    return (
        <div className={`Products ${className}`}>
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