import React, { useState } from "react";
import defaultFallbackImage from "./fallback_image.jpg";
import "./ProductImage.scss"

const ProductImage = ({
    src,
    alt,
    className,
    fallbackImage = defaultFallbackImage,
    ...props
}) => {
    const [isImageLoaded, setImageLoaded] = useState(false);
    const [isImageError, setImageError] = useState(false);

    let ProductImageClasses = "ProductImage";
    if (className) ProductImageClasses += " " + className;
    if (!isImageLoaded) ProductImageClasses += " ProductImage_loading";
    if (isImageError) ProductImageClasses += " ProductImage_error";

    const handleImageLoaded = () => {
        setImageLoaded(true)
    }

    const handleImageError = () => {
        setImageError(true);
    }

    return(
        <div
            className={ProductImageClasses}
            {...props}
        >
            <img
                src={isImageError ? fallbackImage : src}
                alt={alt}
                className="ProductImage-Image"
                onLoad={handleImageLoaded}
                onError={handleImageError}
            />
        </div>
    )
}

export default ProductImage;