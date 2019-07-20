import React, { useState } from 'react';
import './footer.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Footer() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <Card className="text-center footerCard">
      <Card.Body>
    <Card.Title>Don't Miss Out!</Card.Title>
    <Card.Text>
      Click the button below to subscribe to our mailing list!
    </Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Subscribe
        </Button>
        </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
             <Modal.Title>Subscribe Today!</Modal.Title>
         </Modal.Header>

         <Modal.Body>

         <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        </Modal.Body>

        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
      </>
    );
  }
  
export default Footer;