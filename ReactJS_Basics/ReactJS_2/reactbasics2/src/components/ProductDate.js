import './ProductDate.css'
function ProductDate(props) {
    const day = props.date.getDate();
    const month = props.date.toLocaleString('default', { month: 'long' }); // Get the full month name
    const year = props.date.getFullYear();
    return (
        <div className = "productDate">
        <div>
            {day}
        </div>
        <div>
            {month}
        </div>
        <div>
            {year}
        </div>
        </div>
    );
}

export default ProductDate;