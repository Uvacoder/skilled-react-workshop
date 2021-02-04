import React from "react";
import "./App.css";
import Table from "./Table";
import Checkbox from "./Checkbox";

const data = [
  {
    name: "Allen",
    age: 35,
    salary: "120k",
    select: false,
  },
  {
    name: "Ray",
    age: 25,
    salary: "150k",
    select: true,
  },
  {
    name: "Seulgi",
    age: 26,
    salary: "150k",
    select: true,
  },
];

const headers = [
  {
    label: "Name",
    id: "name",
  },
  {
    label: "Select",
    id: "select",
    component: Checkbox,
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
