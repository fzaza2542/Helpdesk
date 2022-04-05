import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Update = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");
  const [validated, setValidated] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getOne/${id}`)
      .then((res) => res.data)
      .then((result) => {
        setTitle(result.title);
        setDescription(result.description);
        setContact(result.contact);
        setStatus(result.status);
      });
  }, [id]);

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
      .put(`http://localhost:4000/api/put/${id}`, data)
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
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                const statusSelect = e.target.value;
                setStatus(statusSelect);
              }}
              required
            >
              <option value={status}>{status}</option>
              <option value="Accepted">Accepted</option>
              <option value="Resolved">Resolved</option>
              <option value="Rejected">Rejected</option>
            </Form.Select>
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
export default Update;
