import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';

export function GameForm (props) {
  const [gameData, setGameData] = useState({
    ImagePath: '',
    Manufacturer: '',
    GameName: '',
    ManufacturerSite: '',
    Locations: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGameData({
      ...gameData,
      [name]: value
    });
  };

  const handleLocationChange = (event, index) => {
    const { name, value } = event.target;
    const updatedLocations = [...gameData.Locations];
    updatedLocations[index][name] = value;
    setGameData({
      ...gameData,
      Locations: updatedLocations
    });
  };

  const handleInstanceChange = (event, locIndex, instIndex) => {
    const { name, value } = event.target;
    const updatedLocations = [...gameData.Locations];
    updatedLocations[locIndex].Games[instIndex][name] = value;
    setGameData({
      ...gameData,
      Locations: updatedLocations
    });
  };

  const addLocation = () => {
    setGameData({
      ...gameData,
      Locations: [
        ...gameData.Locations,
        {
          LocationName: '',
          Games: [{ ID: '', Status: 'in operation' }]
        }
      ]
    });
  };

  const addInstance = (locationIndex) => {
    const updatedLocations = [...gameData.Locations];
    updatedLocations[locationIndex].Games.push({
      ID: '',
      Status: 'in operation'
    });
    setGameData({
      ...gameData,
      Locations: updatedLocations
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(gameData, null, 2));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 className="mb-4">Game Information Form</h1>

        {/* Game Info Section */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Game Name</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="GameName"
              value={gameData.GameName}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Image Path</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="ImagePath"
              value={gameData.ImagePath}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Manufacturer</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="Manufacturer"
              value={gameData.Manufacturer}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Manufacturer Website</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="url"
              name="ManufacturerSite"
              value={gameData.ManufacturerSite}
              onChange={handleInputChange}
              required
            />
          </Col>
        </Form.Group>

        {/* Locations Section */}
        {gameData.Locations.map((location, locationIndex) => (
          <Card className="mb-3" key={locationIndex}>
            <Card.Body>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Location Name</Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    name="LocationName"
                    value={location.LocationName}
                    onChange={(event) => handleLocationChange(event, locationIndex)}
                    required
                  />
                </Col>
              </Form.Group>

              <h5>Game Instances at this Location</h5>
              {location.Games.map((gameInstance, instanceIndex) => (
                <Row key={instanceIndex} className="align-items-center mb-2">
                  <Col sm={5}>
                    <Form.Group>
                      <Form.Label>Instance ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="ID"
                        value={gameInstance.ID}
                        onChange={(event) => handleInstanceChange(event, locationIndex, instanceIndex)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={5}>
                    <Form.Group>
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        name="Status"
                        value={gameInstance.Status}
                        onChange={(event) => handleInstanceChange(event, locationIndex, instanceIndex)}
                        required
                      >
                        <option value="in operation">In operation</option>
                        <option value="out of order">Out of order</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={2}>
                    <Button
                      variant="secondary"
                      onClick={() => addInstance(locationIndex)}
                    >
                      Add Game Instance
                    </Button>
                  </Col>
                </Row>
              ))}
            </Card.Body>
          </Card>
        ))}

        <Button variant="primary" type="button" onClick={addLocation} className="mb-3">
          Add Location
        </Button>
        <div></div>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
