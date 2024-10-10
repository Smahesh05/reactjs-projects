import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Statistics = ({ selectedMonth }) => {
  const [stats, setStats] = useState({
    totalSales: { totalAmount: 0, totalItems: 0 },
    totalSold: 0,
    totalNotSold: 0,
  });

  useEffect(() => {
    fetchStatistics();
  }, [selectedMonth]);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/statistics", {
        params: { month: selectedMonth },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  return (
    <div className="container my-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Sales</Card.Title>
              <Card.Text>
                ${stats.totalSales.totalAmount}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Sold Items</Card.Title>
              <Card.Text>{stats.totalSold}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Not Sold Items</Card.Title>
              <Card.Text>{stats.totalNotSold}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
