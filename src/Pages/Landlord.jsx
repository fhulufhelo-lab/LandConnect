import React, { Component } from 'react'
import MainLayout from '../Layout/MainLayout'
export default class Landlord extends Component {
  render() {
    return (
      <MainLayout>
        Over Section
        <section
          style={{
            padding: '50px',
            backgroundColor: '#f4f4f4',
            color: '#333',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '2rem',
              color: '#1a1a1a',
            }}
          >
            Services
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap', // Makes it responsive
              gap: '20px', // Adds spacing between columns
            }}
          >
            {/* Column 1 */}
            <div
              style={{
                flex: '1 1 calc(33.333% - 20px)', // 3 columns with spacing
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#f9a825',
                }}
              >
                Premium Properties
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Explore a wide range of premium properties tailored to suit your
                needs. From luxurious apartments to affordable homes, we have
                it all.
              </p>
            </div>

            {/* Column 2 */}
            <div
              style={{
                flex: '1 1 calc(33.333% - 20px)', // 3 columns with spacing
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#4caf50',
                }}
              >
                Trusted by Thousands
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Join over 2,000 satisfied customers who have found their dream
                properties with us. Your satisfaction is our priority.
              </p>
            </div>

            {/* Column 3 */}
            <div
              style={{
                flex: '1 1 calc(33.333% - 20px)', // 3 columns with spacing
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#1a73e8',
                }}
              >
                Award-Winning Service
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                We are recognized for excellence in customer service and
                property management. Experience our award-winning approach
                today.
              </p>
            </div>
          </div>
        </section>
      </MainLayout>
      
    )
  }
}
