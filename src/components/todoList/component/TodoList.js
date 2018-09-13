import React from "react";
import Table from "react-bootstrap/es/Table";

export default class TodoList extends  React.Component{

    constructor(props){
        super(props);
    }

    render() {
        const { lists }  = this.props;
        return (
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Action</th>
                        <th>Tags</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        lists.map(item => {
                            return (
                                <tr>
                                    <td>{item.action}</td>
                                    <td>{item.tags}</td>
                                    <td>{item.dueDate}</td>
                                    <td>{item.status}</td>
                                    <td>{item.actions}</td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td colSpan='5' className="center">+</td>
                    </tr>
                    </tbody>
                </Table>
        );
    }
}