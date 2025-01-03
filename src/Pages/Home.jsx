import React, { Component } from 'react';
import MainLayout from '../Layout/MainLayout';
import styled from 'styled-components';
import Good from '../assest/good.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

export default class Home extends Component {
  render() {


    return (
      <MainLayout>
        {/* Hero Section */}
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '50px',

            color: '#fff',
            paddingLeft: '200px',
            flexWrap: 'wrap', // Allows wrapping for smaller screens
          }}
          className="bg-dark"
        >
          <div
            style={{
              maxWidth: '50%',
              minWidth: '300px', // Ensures the text block adjusts for smaller screens
              flex: '1 1 auto', // Allows the block to shrink/grow
              marginBottom: '20px', // Adds spacing on smaller screens
            }}
          >
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Discover <br />
              <span style={{ color: '#f9a825' }}>Most Suitable</span> <br />
              Property
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Find a variety of properties that suit you very easily <br />
              Forget all difficulties in finding a residence for you.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                style={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Get Started
              </button>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  9,000+
                </h3>
                <p>Premium Products</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  2,000+
                </h3>
                <p>Happy Customers</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  28+
                </h3>
                <p>Award Winning</p>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: '1 1 auto', // Allows the image block to grow/shrink
              maxWidth: '500px',
              minWidth: '300px', // Ensures image scales down for smaller screens
              overflow: 'hidden',
            }}
          >
            <img
              src={Good}
              alt="Modern Building"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '50% 50% 0 0', // Arched style
              }}
            />
          </div>
        </section>

        <h1 className="text-center text-dark display-6 font-primary fw-bold pt-4" >
          Services
        </h1>

        <Card
          className="mb-4 "
          style={{
            width: '90%',
            height: '300px',
             marginLeft: '55px', // Move card slightly to the right
            marginRight: '10px', // Auto margin on the right for alignment
          }}
        >
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Landlords</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Tenates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled">Advertise</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          
        </Card>

      </MainLayout>
    );
  }
}
