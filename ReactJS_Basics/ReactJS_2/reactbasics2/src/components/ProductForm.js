import { useState } from "react";

function ProductForm(props) {
    // const [fulProductInput, setFullProductInput] = useState({
    //     title: '',
    //     date: ''
    // });

    // function setFullProductInput(event, prevState) {
    //     return {...prevState, title: event.target.value}
    // }

    // single varibles for each state
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event){
        console.log('title : ' + event.target.value);
        setTitle(event.target.value);
        // return {...prevState, title: event.target.value}
    }

    function dateChangeHandler(event) {
        console.log('date : ' + event.target.value);
        setDate(event.target.value);
    }


    // this function basically creating a object of values used in the form
    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title: title,
            date: date
        }
        // here we are getting the title and date from the useState variables.
        console.log(productData);
        props.printProduct(productData);
        // to remove all the values inserted in the input field
        // also link the value to all the input field
        setDate('');
        setTitle(' ');
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange = {titleChangeHandler}></input> 
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={date} onChange = {dateChangeHandler}></input> 
            </div>
            <button type="submit">Add to Cart</button>
        </form>
    );
}

export default ProductForm;