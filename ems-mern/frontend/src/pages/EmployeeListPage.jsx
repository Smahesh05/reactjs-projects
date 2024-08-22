import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const data = [
  {
    _id: 1,
    image: "hello",
    name: "hukum",
    email: "hukum@gmail.com",
    mobile: 123456789,
    desgination: "HR",
    gender: "female",
    course: "MCA",
    createdDate: "01-02-2000",
  },
  {
    _id: 2,
    image: "hello",
    name: "hukum",
    email: "hukum@gmail.com",
    mobile: 123456789,
    desgination: "HR",
    gender: "female",
    course: "MCA",
    createdDate: "2015-",
  },
];

const EmployeeListPage = () => {
  const createEmployeeHandler = () => {
    console.log("Created EMployee");
  };

  const deleteHandler = (employeeid) => {
    const deleteEmployee = data.filter(
      (employee) => employee._id !== employeeid
    );

    console.log(deleteEmployee);
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Employee List</h1>
        </Col>
        <Col className="text-end">
          <Button className="my-3" onClick={createEmployeeHandler}>
            <FaPlus /> Create Employee
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>NAME</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>CreatedAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.image}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.desgination}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>{employee.createdDate}</td>

              <td>
                <LinkContainer to={`/admin/employee/${employee._id}/edit`}>
                  <Button variant="light" className="btn-sm mx-2">
                    <FaEdit />
                  </Button>
                </LinkContainer>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(employee._id)}
                >
                  <FaTrash style={{ color: "white" }} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EmployeeListPage;
