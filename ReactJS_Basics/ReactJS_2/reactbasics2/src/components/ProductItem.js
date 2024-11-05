import React, {useState} from 'react';

import ProductDate from "./ProductDate";
import './ProductItem.css'


function ProductItem(props) {
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        // alert('Your item is added in the cart');
        setTitle("PopCorn")
    }

    return (
        <div className = "produtItem">
            <ProductDate date = {props.date}></ProductDate>
            <div className = "title">
                <div>{title}</div>
                <button className = "button" onClick = {clickHandler}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductItem;