import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";

const data = [
  {
    name: "Allen",
    age: 35,
    salary: "150k",
  },
  {
    name: "Ray",
    age: 25,
    salary: "150k",
  },
  {
    name: "Seulgi",
    age: 26,
    salary: "150k",
  },
];

const headers = [
  {
    label: "Name",
    id: "name",
  },
  {
    label: "Age",
    id: "age",
  },
  {
    label: "Salary",
    id: "salary",
  },
];

function App() {
  return (
    <div className="App">
      <div>This is an App</div>
      <Table data={data} headers={headers}></Table>
    </div>
  );
}

export default App;
