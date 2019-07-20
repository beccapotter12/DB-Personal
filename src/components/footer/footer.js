import React, { Component }from 'react';
import './footer.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Subscribe from '../footer/footer';

class Footer extends Component { 

  constructor(){
    super()
    this.state = {modalVisible: false};
  }

  render(){
    return(
      <div>
    <Card className="text-center footerCard">
      <Card.Body>
    <Card.Title>Don't Miss Out!</Card.Title>
    <Card.Text>
      Click the button below to subscribe to our mailing list!
    </Card.Text>
    <Button variant="primary" type="submit">
    Submit
    </Button>  
    <Subscribe show={this.state.modalVisible} />
    </Card.Body>
    </Card>
    </div>

    )
  }
};

export default Footer;

