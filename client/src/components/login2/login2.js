import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../../assets/config.json';
import AdminTable from '../table/table';

class LoginTwo extends Component {

    state = {

    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        // console.log(this.state)
    };

    validate = event => {
        event.preventDefault()
        if (this.state.username === User.username && this.state.password === User.password) {
            // return <AdminTable />
            console.log("Validation Passed")

        } else {
            console.log("Validation Failed")

        }

    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name='username' type="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.validate}>
                        Submit
                </Button>
                </Form>

            </div>
        )
    }
}

export default LoginTwo;

