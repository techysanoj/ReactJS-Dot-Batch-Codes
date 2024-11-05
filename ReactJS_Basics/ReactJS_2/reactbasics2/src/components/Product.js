import ProductItem from './ProductItem'
import './Product.css'
function Product(props) {
    return (
        <div className = "products">
            <ProductItem title = {props.items[0].title} date = {props.items[0].date}></ProductItem>
            <ProductItem title = {props.items[2].title} date = {props.items[2].date}></ProductItem>
            <ProductItem title = {props.items[3].title} date = {props.items[3].date}></ProductItem>
            <ProductItem title = {props.items[4].title} date = {props.items[4].date}></ProductItem>
        </div>
    )
}

export default Product;