import React from "react";
import Table from "react-bootstrap/es/Table";
import Dialog from '../../dialog/';
import { Link } from 'react-router-dom'
import '../todoList.css';

export default class TodoList extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            isOpenDialog : false,
            idOrderUp: true,
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

    compareUp = (property) => {
        return function(obj1,obj2){
            let value1 = obj1[property];
            let value2 = obj2[property];
            return value1 - value2;
        }
    };

    compareDown = (property) => {
        return function(obj1,obj2){
            let value1 = obj1[property];
            let value2 = obj2[property];
            return value2 - value1;
        }
    };

    sortListById =(lists) => {
        this.setState({
            idOrderUp : !this.state.idOrderUp,
        });
        if (this.state.idOrderUp){
            return lists.sort(this.compareUp("id"));
        } else{
            return lists.sort(this.compareDown("id"));
        }
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
                        <th onClick={()=>{this.sortListById(lists)}}>
                            <div className='triangle' >
                                <div className= {this.state.idOrderUp ? "triangle-up": "triangle-down"}></div>
                                <span>ID</span>
                            </div>
                        </th>
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
                                    <td>{item.id}</td>
                                    <td>{item.actionName}</td>
                                    <td>{item.tags}</td>
                                    <td>{item.dueDate}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        {
                                            item.actions.map(it => {
                                                if (it === 'delete') {
                                                    return <button key={new Date().getTime()+1} onClick={()=>{
                                                        onDeleteItem(item.id)
                                                    }}>{it}</button>
                                                }
                                                if (it === 'details'){
                                                    return <button key={item.id}><Link to={`/details:${item.id}`}>{it}</Link></button>
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
                        } colSpan='6' className="center">+</td>
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