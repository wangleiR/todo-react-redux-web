import React from "react";
import Table from "react-bootstrap/es/Table";
import Dialog from '../../dialog/';
import { Link } from 'react-router-dom'

export default class TodoList extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            isOpenDialog : false,
        }
    }

    openDialog = () => {
        this.setState({
            isOpenDialog :true,
        });
    };

    closeDialog = () => {
        this.setState({
            isOpenDialog :false,
        });
    };


    render() {
        const {
            lists,
            onDeleteItem,
        }  = this.props;
        return (
            <div>
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
                                <tr key={item.id}>
                                    <td>{item.actionName}</td>
                                    <td>{item.tags}</td>
                                    <td>{item.dueDate}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        {
                                            item.actions.map(it => {
                                                if (it === 'delete') {
                                                    return <span key={new Date().getTime()+1} onClick={()=>{
                                                        onDeleteItem(item.id)
                                                    }}>{it}</span>
                                                }
                                                if (it === 'details'){
                                                    return <span key={new Date().getTime()+11}><Link to='/'>{it}</Link></span>
                                                }
                                            })
                                        }
                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td onClick={() => {this.openDialog()}
                        } colSpan='5' className="center">+</td>
                    </tr>
                    </tbody>
                </Table>
                {
                    this.state.isOpenDialog && <Dialog closeDialog={this.closeDialog}/>
                }
            </div>
        );
    }
}