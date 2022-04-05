import React from "react";
import { Card } from "react-bootstrap";
import { HiOutlineMail, HiOutlineDeviceMobile } from "react-icons/hi";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Card className="text-center bg-dark dd ">
        <Card.Body>
          <Card.Title className="text-white">Contact Me</Card.Title>
          <Card.Text className="text-white d-flex">
            <div className="justify-content-center me-2">
              <HiOutlineMail />
            </div>
            <div className="justify-content-center ms-2">
              f_boonlom@hotmail.com
            </div>
          </Card.Text>
          <Card.Text className="text-white d-flex">
            <div className="justify-content-center me-2">
              <HiOutlineDeviceMobile />
            </div>
            <div className="justify-content-center ms-2">097-242-3917</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </footer>
  );
};

export default Footer;
