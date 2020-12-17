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

export const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
}

export const validatePassword = (password) => {
    if (password.length < 5) return false;

    let count = 0;

    count += /[a-z]/.test(password) ? 1 : 0;
    count += /[A-Z]/.test(password) ? 1 : 0;
    count += /\d/.test(password) ? 1 : 0;
    count += /[\W]/.test(password) ? 1 : 0;

    return count >= 2;
}

export const validateFullName = (fullName) => {
    const regexp = /^[A-Za-z]+\s+[A-Za-z]+$/;
    return regexp.test(fullName);
}