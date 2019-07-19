import React from 'react';
import './footer.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Footer = props => (

    <Card className="text-center footerCard">
  <Card.Body>
    <Card.Title>Don't Miss Out!</Card.Title>
    <Card.Text>
      Click the button below to subscribe to our mailing list!
    </Card.Text>
    <Button variant="primary" className="buttonColor">Subscribe!</Button>
  </Card.Body>
</Card>

);

export default Footer;