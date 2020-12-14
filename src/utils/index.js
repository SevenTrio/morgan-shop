export const getSortingFunction = (sortType) => {
    switch (sortType.alias) {
        case "newness":
            return (a, b) => new Date(b.timeStamp) - new Date(a.timeStamp);

        case "price-height-to-low":
            return (a, b) => b.price - a.price;

        case "price-low-to-height":
            return (a, b) => a.price - b.price;

        default:
            return (a, b) => new Date(b.timeStamp) - new Date(a.timeStamp);
    }
}

export const getFilterByCategoryFunction = (category) => {
    if (!category || !category.id) return f => f;
    return product => product.categoryId === category.id;
}