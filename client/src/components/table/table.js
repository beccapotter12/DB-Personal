import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';


class AdminTable extends Component {

    render() {
        return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email Address</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Email1</td>
                    <td>Email2</td>
                    <td>Email3</td>
                </tr>
                
            </tbody>
        </Table>
    </div>
        )
    }
};

export default AdminTable; 