import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("Pending");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    const data = {
      title: title,
      description: description,
      contact: contact,
      status: status,
    };
    axios
      .post("http://localhost:4000/api/post", data)
      .then((res) => console.log(res.data));
    if (title === "" || description === "" || contact === "") {
      alert("Please fill all the fields");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <div
        style={{
          marginTop: "50px",
          border: "2px solid black",
          padding: "10px",
        }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter port title."
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please fill all the fields
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please fill all the fields
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact."
              id="contact"
              name="contact"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please fill all the fields
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              id="status"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please fill all the fields
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </div>
      <div className="d-flex justify-content-end mt-2">
        <Button variant="dark" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default CreateTicket;
