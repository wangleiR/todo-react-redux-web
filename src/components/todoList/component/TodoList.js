import React from "react";
import Table from "react-bootstrap/es/Table";
import Dialog from '../../dialog/';
import { Link } from 'react-router-dom'
import '../todoList.css';
import moment from 'moment';
import {
    getListFromAPI,
    deleteListFromAPIById,
    sortTodoListFromAPI
} from '../../../restfulAPI/API';

export default class TodoList extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            isOpenDialog : false,
            idOrderUp: true,
            actionOrderUp:true,
            dueDateOrderUp:true,
        };
        this.props.getListFromBackAPI(getListFromAPI(this.props.userToken));
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

    sortListById = () => {
        this.setState({
            idOrderUp : !this.state.idOrderUp,
        });
        this.sendSortRequest(this.state.idOrderUp,'id');
    };

    sortListByAction = () =>{
        this.setState({
            actionOrderUp : !this.state.actionOrderUp,
        });
        this.sendSortRequest(this.state.actionOrderUp,'name');
    };

    sortListByDueDate = () =>{
        this.setState({
            dueDateOrderUp : !this.state.dueDateOrderUp,
        });
        this.sendSortRequest(this.state.dueDateOrderUp,'dueDate');
    };

    getSortObject = (sortField,direction) =>{
        return {
            sort:sortField,
            direction:direction
        }
    };

    sendSortRequest = (sortOrder,sortField) => {
        let obj;
        if (sortOrder){
            obj = this.getSortObject(sortField,'asc');
        }else{
            obj = this.getSortObject(sortField,'desc');
        }
        this.props.getListFromBackAPI(sortTodoListFromAPI(this.props.userToken,obj));
    };

    render() {
        const {
            lists,
            listOperation,
            userToken,
            deleteTodoItem,
        }  = this.props;
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th onClick={()=>{this.sortListById()}}>
                            <div className='triangle' >
                                <div className= {this.state.idOrderUp ? "triangle-up": "triangle-down"}></div>
                                <span>ID</span>
                            </div>
                        </th>
                        <th onClick={()=>{this.sortListByAction()}}>
                            <div className='triangle' >
                                <div className= {this.state.actionOrderUp ? "triangle-up": "triangle-down"}></div>
                                <span>Action</span>
                            </div>
                        </th>
                        <th>Tags</th>
                        <th onClick={()=>{this.sortListByDueDate()}}>
                            <div className='triangle' >
                                <div className= {this.state.dueDateOrderUp ? "triangle-up": "triangle-down"}></div>
                                <span>Due Date</span>
                            </div>
                        </th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        lists.map(item => {
                            // debugger;
                            console.log(item);
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        {
                                            item.tags && item.tags.map(tag => {
                                                return <span>{tag.value}</span>;
                                            })
                                        }
                                    </td>
                                    <td>{moment(item.dueDate).format('YYYY-MM-DD')}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        {
                                            listOperation && listOperation.map(it => {
                                                if (it === 'delete') {
                                                    return <button key={new Date().getTime()+1} onClick={()=>{
                                                        deleteTodoItem(deleteListFromAPIById(userToken,item.id));
                                                    }}>{it}</button>
                                                }
                                                if (it === 'details'){
                                                    return <button key={item.id}><Link to={`/details/${item.id}`}>{it}</Link></button>
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