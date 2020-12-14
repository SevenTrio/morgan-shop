import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/categoriesActions";
import { fetchProducts } from "../redux/actions/productsActions";
import { selectCategoriesList } from "../redux/selectors/categoriesSelectors";
import { selectProductsList } from "../redux/selectors/productsSelectors";

export const useFetchShopData = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProductsList);
    const categories = useSelector(selectCategoriesList);

    useEffect(() => {
        if (!products.length || !categories.length) {
            dispatch(fetchProducts());
            dispatch(fetchCategories());
        }
    }, []);

    return { products, categories };
};