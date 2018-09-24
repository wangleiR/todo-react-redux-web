import React from "react";
import { Modal, Button} from "react-bootstrap";
import Select from "react-select";
import '../dialog.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {Link} from "react-router-dom";
import {
    addTodoFromAPI,
    editTodoFromAPI,
    getTagListFromAPI,
} from '../../../restfulAPI/API';


const statusOptions = [
    { value: 'To Do', label: 'To Do' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Blocked', label: 'Blocked' },
];

export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        if (this.props.match) {
            this.setItemState(this.props.lists, this.props.match);
            this.id = this.props.match.params.id
        } else {
            this.state = {
                name: 'action',
                tags: [],
                dueDate: moment().format('YYYY-MM-DD'),
                status:'To Do',
            };
        }
        getTagListFromAPI(this.props.userToken,this.props.getTagListFromBackAPI);
    }

    getToDoItem = () =>{
        return {
            id: this.id,
            name: this.state.name,
            tags: this.state.tags,
            dueDate: this.state.dueDate,
            status: this.state.status,
        }
    };

    addTagsForItem = (event) => {
        event.map(obj => {
            return this.state.tags.push(obj);
        });
        this.setState({
            tags : this.state.tags,
        });
    };

    setItemState = (lists,match) => {
        if (match) {
          lists.map(item=>{
              console.log(item.id);
              if (item.id == match.params.id) {
                  this.state = {
                      ...item
                  };
              }
          });
        }
    };

    render() {
        const {
            onAddItem,
            onUpdateItem,
            userToken,
            getListFromBackAPI,
            tagsLists,
        } = this.props;

        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>New To Do</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="dialog-body-item"
                            onChange={(event)=>{
                            this.setState({name : event.target.value});
                        }}
                        >
                            <label className="dialog-label">Action Name : </label>
                            <input name="name" value={this.state.name}/>
                        </div>

                        <div className="dialog-body-item">
                            <label className="dialog-label">Tags : </label>
                            <div className="dialog-select-input">
                                <Select
                                    onChange={(event)=>{this.addTagsForItem(event)}}
                                    // defaultValue={[{ value: this.state.tags, label: this.state.tags }]}
                                    isMulti
                                    name="colors"
                                    options={tagsLists}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>

                        <div className="dialog-body-item">
                            <label className="dialog-label">Due Date : </label>
                            <DatePicker
                                onChange={(date)=>{
                                   this.setState({dueDate : date.format('YYYY-MM-DD')});
                                }}
                                selected={moment(this.state.dueDate)}
                            />
                        </div>

                        <div className="dialog-body-item">
                            <label className="dialog-label">Status : </label>
                            <div className="dialog-select-input">
                                <Select onChange={(event)=>{this.setState({status : event.value});}}
                                    defaultValue={[{value:this.state.status,label:this.state.status}]}
                                    options={statusOptions}
                                />
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        {
                            !this.props.match &&
                             <div>
                                <Button bsStyle="primary" onClick={()=>{
                                    addTodoFromAPI(userToken,this.getToDoItem(),getListFromBackAPI);
                                    this.props.closeDialog()
                                }}>Add</Button>
                                <Button onClick={()=>{this.props.closeDialog()}}>Close</Button>
                            </div>
                        }
                        {
                            this.props.match &&
                            <div>
                                <Button onClick={()=>{
                                    editTodoFromAPI(userToken,this.getToDoItem(),getListFromBackAPI);
                                }}><Link to={`/home`}>Update</Link></Button>
                                <Button><Link to={`/home`}>Close</Link></Button>
                            </div>

                        }
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}