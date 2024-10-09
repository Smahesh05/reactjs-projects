import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DUMMYDATA from "../../../backend/dummyData.json";

const MONTHS = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "February",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];

function Transactions() {
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[2].name);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="container mx-auto">
      <div className="my-5 text-center">
        <h2>Transactions</h2>
      </div>
      <div className="w-100">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <div className="row row-gap-3  justify-content-between">
                <div className="col-md-3 col-sm-12">
                  <Form.Control
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search Transaction"
                    className="form-control"
                  />
                </div>
                <div className="col-md-3 col-sm-12">
                  <Form.Select
                    name=""
                    id=""
                    className="form-select float-right"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    {MONTHS.map((month) => (
                      <option
                        className="selector-element"
                        key={month.id}
                        value={month.name}
                      >
                        {month.name}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <table className="table table-bordered">
              <thead >
                <tr >
                  <th>ID</th>
                  <th>Title</th>
                  <th className="d-md-block d-none">Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Sold</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {DUMMYDATA.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td className="d-md-block d-none">{item.description.slice(0, 101)}.</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{item.category}</td>
                    <td>{item.sold}</td>
                    <td>
                      <img
                        height={"100px"}
                        className="bg-transparent"
                        src={item.image}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-12">
            <div className="col-md-4">
              <p>Page No: 1</p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <p>Per Page: 10</p>
            </div>
          </div>
          <div className="col-md-12"></div>
          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
