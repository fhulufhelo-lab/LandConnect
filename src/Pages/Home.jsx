import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import Good from "../assest/good.jpg";
import Landlord from "../assest/Landlord.jpg";
// import Tenant from "../assest/Tenant.jpg"; // Add this if you have an image for Tenants
// import Advertise from "../assest/Advertise.jpg"; // Add this if you have an image for Advertise
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export default function Home() {
  const [activeTab, setActiveTab] = useState("#first");

  const tabContent = {
    "#first": {
      image: Landlord, 
      title: "Landlords",
      text: "Content for landlords goes here.",
      
    },
    "#link": {
      title: "Tenants",
      text: "Content for tenants goes here.",
      image: Good, // Add a specific image for Tenants
    },
    "#disabled": {
      title: "Advertise",
      text: "Content for advertising goes here.",
      image: Good, // Add a specific image for Advertise
    },
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
          padding: "50px",
          color: "#fff",
          paddingLeft: "200px",
          marginTop: "10px",

          flexWrap: "wrap",
        }}
        className="bg-dark"
      >
        <div
          style={{
            maxWidth: "50%",
            minWidth: "300px",
            flex: "1 1 auto",
            marginBottom: "200px",
          }}
        >
          
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" ,marginTop: "20px" }}>
            Discover <br />
            <span style={{ color: "#f9a825" }}>Most Suitable</span> <br />
            Property
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Find a variety of properties that suit you very easily <br />
            Forget all difficulties in finding a residence for you.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
       
        <div
          style={{
            flex: "1 1 auto",
            maxWidth: "500px",
            minWidth: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={Good}
            alt="Modern Building"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "50% 50% 0 0",
            }}
          />
        </div>
      </section>

      <h1 className="text-center text-dark display-6 font-primary fw-bold pt-4">
        Services
      </h1>

      <Card
        className="mb-4"
        style={{
          width: "85%", // Makes the card wider (adjust percentage or use fixed px value)
          minHeight: "600px", // Ensures the card has a larger height
          margin: "0 auto", // Centers the card horizontally on the page
        }}
      >
        <Card.Header>
          <Nav
            variant="pills"
            defaultActiveKey="#first"
            onSelect={(selectedKey) => setActiveTab(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link eventKey="#first">Landlords</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#link">Tenants</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#disabled">Advertise</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body
  style={{
    backgroundImage: `url(${tabContent[activeTab]?.image})`,
    backgroundSize: "contain", // Ensures the whole image is visible
    backgroundPosition: "center",
    minHeight: "400px", // Fixed height for consistent layout
    display: "flex", // Enables flexbox for positioning
    flexDirection: "column", // Arranges content vertically
    justifyContent: "flex-end", // Pushes the content to the bottom
  
    color: "white", // Ensures text is visible over the image
    padding: "20px", // Padding for spacing
   
    position: "relative", // Ensures correct positioning for child elements
  }}
>
  <div
    style={{
      width: "100%",
      backgroundColor: "rgba(138, 138, 138, 0.5)", // Semi-transparent background for text readability
      padding: "10px",
    }}
  >
    <Card.Title style={{ marginBottom: "10px", fontSize: "1.5rem" }}>
      {tabContent[activeTab]?.title}
    </Card.Title>
    <Card.Text style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
      {tabContent[activeTab]?.text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </div>
</Card.Body>

      </Card>
    </MainLayout>     
  );
}
