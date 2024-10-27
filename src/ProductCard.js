import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            {props.onSale && <div className="sale-badge">מבצע</div>}
            <img src={props.image} alt={props.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{props.name}</h3>
                <div className="product-price">
                    <span className="price-discounted">₪{props.discountedPrice}</span>
                    <span className="price-original">₪{props.originalPrice}</span>
                </div>
                {/*<button className="add-to-cart">הוסף להזמנה</button>*/}
            </div>
        </div>
    );
};

export default ProductCard;
