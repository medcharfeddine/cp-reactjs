import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "./image/form.png";

function App() {
  const [val, setVal] = useState();
  const [ccv, setCcv] = useState();
  const [zip, setZip] = useState();
  

  return (
    <div className="container">
      <Form className="form rounded">
        <img src={Img} alt="avatar" className="mb-1" />
        <h5 className="pay text-center">Payment Info</h5>
        <Row className="mb-3">
          <Form.Group className="col-12" as={Col} controlId="formGridName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="col-12" as={Col} controlId="formGridPassword">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              type="text"
              pattern="[0-9]*"
              value={val}
              onChange={(e) =>
                setVal((v) => (e.target.value))
              }
              maxLength={16}
              placeholder="xxxx xxxx xxxx xxxx"
              required
            />
          </Form.Group>
          <Form.Group className="col-6" as={Col} controlId="formGridExpDate">
            <Form.Label>Exp Date</Form.Label>
            <Form.Control
              className="font-size-6 fs"
              type="month"
              inputMode="numeric"
              placeholder="01/23"
              required
            />
          </Form.Group>
          <Form.Group className="col-6" as={Col} controlId="formGridCvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              pattern="[0-9]*"
              value={ccv}
              onChange={(e) =>
                setCcv((v) => (e.target.value))
              }
              maxLength={3}
              placeholder="123"
              required
            />
          </Form.Group>
          <Form.Group className="col-12" as={Col} controlId="formGridPassword">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              pattern="[0-9]*"
              value={zip}
              onChange={(e) =>
                setZip((v) => (e.target.value))
              }
              maxLength="4"
              placeholder="1234"
              required
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
