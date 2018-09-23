import React from "react";
import { Modal, Button} from "react-bootstrap";
import Select from "react-select";
import '../dialog.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {Link} from "react-router-dom";

const statusOptions = [
    { value: 'To Do', label: 'To Do' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Blocked', label: 'Blocked' },
];

const tagOptions = [
    { value: 'Study', label: 'Study' },
    { value: 'Life', label: 'Life' },
    { value: 'Work', label: 'Work' }
];

export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        if (this.props.match) {
            this.setItemState(this.props.lists, this.props.match);
            this.id = this.props.match.params.id
        } else {
            this.state = {
                actionName: 'action',
                tags:['Work'],
                dueDate: moment().format('YYYY-MM-DD'),
                status:'To Do',
            };
        }
    }

    getToDoItem = () =>{
        return {
            id: this.id,
            actionName: this.state.actionName,
            tags: this.state.tags,
            dueDate: this.state.dueDate,
            status: this.state.status,
        }
    };

    addTagsForItem = (event) => {
        let arr = "";
        event.map(obj => {
            return arr += obj.value+ " ";
        });
        this.setState({
            tags : arr,
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
          console.log(this.state)
        }
    };

    render() {
        const {
            onAddItem,
            onUpdateItem,
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
                            this.setState({actionName : event.target.value});
                        }}
                        >
                            <label className="dialog-label">Action Name : </label>
                            <input name="actionName" value={this.state.actionName}/>
                        </div>

                        <div className="dialog-body-item">
                            <label className="dialog-label">Tags : </label>
                            <div className="dialog-select-input">
                                <Select
                                    onChange={(event)=>{this.addTagsForItem(event)}}
                                    defaultValue={[{ value: this.state.tags, label: this.state.tags }]}
                                    isMulti
                                    name="colors"
                                    options={tagOptions}
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
                                    onAddItem(this.getToDoItem());
                                    this.props.closeDialog()
                                }}>Add</Button>
                                <Button onClick={()=>{this.props.closeDialog()}}>Close</Button>
                            </div>
                        }
                        {
                            this.props.match &&
                            <div>
                                <Button onClick={()=>{
                                    onUpdateItem(this.getToDoItem());
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