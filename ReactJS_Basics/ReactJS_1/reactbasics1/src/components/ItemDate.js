import './ItemDate.css'

function ItemDate(props) {
    // data is same in this.
    // const day = 29;
    // const month = "September";
    // const year = 2002;

    // so to change these data we will use Props
    // now as we have made parameters so we can use this
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return (
        <div >
            {day} {month} {year}
        </div>
    )
}

export default ItemDate;