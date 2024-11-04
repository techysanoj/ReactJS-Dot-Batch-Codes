import logo from './logo.svg';
import './App.css';
import './components/Item'
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const itemFirstName = "Nirma";
  const response = [
    {
      itemName: "Sanoj",
      itemDay: "29",
      itemMonth: "September",
      itemYear: "2002"
    },
    {
      itemName: "Sanoj Kumar",
      itemDay: "01",
      itemMonth: "October",
      itemYear: "2003"
    },
    {
      itemName: "Sanoj Pandit",
      itemDay: "02",
      itemMonth: "November",
      itemYear: "2004"
    }

  ]
  return (
    <div className="App">
      <h1>Hello Babe</h1>
      <Item name = {response[0].itemName} ></Item>
      <ItemDate day = {response[0].itemDay} month = {response[0].itemMonth} year = {response[0].itemYear}></ItemDate>

      <Item name = {response[1].itemName}></Item>
      <ItemDate day = {response[1].itemDay} month = {response[1].itemMonth} year = {response[1].itemYear}></ItemDate>

      <Item name = {response[2].itemName}>
        Ye wala best hai
      </Item>
      <ItemDate day = {response[2].itemDay} month = {response[2].itemMonth} year = {response[2].itemYear}></ItemDate>
    </div>
  );
}

export default App;
