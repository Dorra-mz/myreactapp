import React from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react'; // Importing the Google Maps React library
import { Container, Row, Col, Card } from 'react-bootstrap';

// Component for the Google Map
const MapComponent = ({ center, zoom }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }} // Replace with your Google Maps API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Marker for the center of the map */}
        <div
          lat={center.lat}
          lng={center.lng}
          className="map-marker"
        />
      </GoogleMapReact>
    </div>
  );
};

// Main App component
function App() {
  const mapCenter = { lat: 37.7749, lng: -122.4194 }; // Default center for San Francisco
  const mapZoom = 12; // Default zoom level

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Google Maps: An amazing tool used every day!</h1>
      </header>
      
      {/* Main content */}
      <Container className="main-content">
        <Row>
          {/* Map component */}
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <MapComponent center={mapCenter} zoom={mapZoom} />
              </Card.Body>
            </Card>
          </Col>
          {/* Additional content */}
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                {/* Add your additional content here */}
                <p>This is where additional content can be placed.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Google Maps Landing Page</p>
      </footer>
    </div>
  );
}

export default App;
