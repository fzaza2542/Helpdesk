import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import axios from "axios";
import "./View.css";

const View = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {
    const response = await axios.get("http://localhost:4000/api/getAll");
    if (response.status === 200) {
      const dataTime = response.data.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      setData(dataTime); //ส่งข้อมูลไปเก็บไว้ใน setData
    }
  };

  function timeToString(time) {
    let text = time;
    let result = text.substring(0, 10);
    let result1 = text.substring(11, 19);
    let result2 = result1.split(":");
    let result3 = parseInt(result2[0]) + 7;
    let result4 = result3.toString() + ":" + result2[1] + ":" + result2[2];

    return result + " " + result4;
  }

  //filter
  const filter = async (button) => {
    const response = await axios.get("http://localhost:4000/api/getAll");
    const filteredData = response.data.filter((item) => item.status === button);
    const dataTime = filteredData.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
    setData(dataTime);
  };

  return (
    <div className="container1">
      <Card className="mt-2">
        <Card.Body className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-4 col-sm-3 col-xs-1 mt-2">
            <h4> Ticket</h4>
          </div>

          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8 col-sm-9 col-xs-11 mt-2  check">
            <Form>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="status"
                  inline
                  label="All"
                  onClick={getTickets}
                />
                <Form.Check
                  type="radio"
                  name="status"
                  inline
                  label="Pending"
                  onClick={() => filter("Pending")}
                />
                <Form.Check
                  type="radio"
                  name="status"
                  inline
                  label="Accepted"
                  onClick={() => filter("Accepted")}
                />

                <Form.Check
                  type="radio"
                  name="status"
                  inline
                  label="Resolved"
                  onClick={() => filter("Resolved")}
                />

                <Form.Check
                  type="radio"
                  name="status"
                  inline
                  label="Rejected"
                  onClick={() => filter("Rejected")}
                />
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
      </Card>

      <div className="item">
        {data &&
          data.map((item) => {
            return (
              <div className="item-con" key={item._id}>
                <div className="box">
                  <Card className="box-card">
                    <Card.Body className="body-card">
                      <Card.Title className="text-card">
                        Title : {item.title}
                      </Card.Title>

                      <Card.Text className="text-card">
                        Description : {item.description}
                      </Card.Text>

                      <Card.Text className="text-card">
                        Contact : {item.contact}
                      </Card.Text>

                      <Card.Text className="text-card">
                        Status : {item.status}
                      </Card.Text>

                      <Card.Text className="text-card">
                        Time : {timeToString(item.createdAt)}
                      </Card.Text>

                      <Card.Text className="text-card">
                        UpdateTime : {timeToString(item.updatedAt)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default View;
