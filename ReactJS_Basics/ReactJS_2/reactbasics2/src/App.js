// import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
import ProductForm from './components/ProductForm';

function App() {
  const productsData = [
    {
      id: 'p0',
      title: 'Phone',
      amount: '20,000',
      date: new Date(2023, 10, 7)
    },
    {
      id: 'p1',
      itle: 'Laptop',
      amount: '80,000',
      date: new Date(2022, 5, 7)
    },
    {
      id: 'p2',
      title: 'Computer',
      amount: '30,000',
      date: new Date(2020, 9, 7)
    },
    {
      id: 'p3',
      title: 'Almirah',
      amount: '4,000',
      date: new Date(2023, 9, 7)
    },
    {
      id: 'p4',
      title: 'Laptop',
      amount: '80,000',
      date: new Date(2023, 9, 7)
    }
  ];

  function printProductData(data) {
    console.log('Inside the parent (App.js) function');
    console.log(data);
  }

  return (
    <div className = "productDetails">
      <ProductForm printProduct = {printProductData}></ProductForm>
      <Product items = {productsData} ></Product>
    </div>
  );
}

export default App;
