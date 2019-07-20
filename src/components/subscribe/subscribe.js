import React from 'react';
import './subscribe.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Subscribe = props => (
    <div>
    <Modal.Dialog>
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
             <Button variant="secondary">Close</Button>
             <Button variant="primary">Submit</Button>
        </Modal.Footer>
</Modal.Dialog>
    
    
    </div>



);

export default Subscribe; 