import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import CreateTicket from "./pages/CreateTicket";
import Home from "./pages/Home";
import View from "./pages/View";
import Update from "./pages/Update";

class App extends Component {
  render() {
    return (
      <Container>
        <div class="bubbels">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>

        <Navigation />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/admin" element={<Home />} />
              <Route path="/add" element={<CreateTicket />} />
              <Route path="/update/:id" element={<Update />} />
              <Route path="/" element={<View />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </main>

        
      </Container>
    );
  }
}

export default App;
