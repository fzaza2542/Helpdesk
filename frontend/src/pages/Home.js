import React, { useEffect, useState } from "react";
import { Table, Button,Form,Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";


const Home = () => {
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

  const UpdateTicket = id => {
    window.location = '/update/'+id
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

//   const onDeleteTicket = async (id) =>{
//     if(window.confirm(`Are you sure that you wanted to delete id${id}`));
//     const response = await axios.delete(`http://localhost:4000/api/delete/${id}`);
//     if(response.status === 200){
//         getTickets();
//     }
//  }

 function timeToString(time)  {
  let text = time;
   let result = text.substring(0, 10);
   let result1 = text.substring(11,19)
   let result2 = result1.split(":");
   let result3 = parseInt(result2[0]) +7;
    let result4 = result3.toString() + ":" + result2[1] + ":" + result2[2];
    
   return result + " " + result4;
 }

  

  return (
    <div>
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

    <Table striped bordered hover variant="light" className="mt-3">
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Description</th>
          <th>Contact</th>
          <th>Status</th>
          <th>Time</th>
          <th>UpdateTime</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.contact}</td>
                <td>{item.status}</td>
                <td>{timeToString(item.createdAt)}</td>
                <td>{timeToString(item.updatedAt)}</td>

                    
                  <td>
                      <div className="d-flex justify-content-center">
                          <div class="btn-box">
                        <Link to={`/update/${item._id}`}>
                          <Button variant="outline-info" onClick={()=>UpdateTicket(item._id)}>Edit</Button>
                        </Link>
                        </div>
                      </div>
                  </td>
                
              </tr>
            );
          })}
      </tbody>
    </Table>
    </div> 
  );
};

export default Home;
