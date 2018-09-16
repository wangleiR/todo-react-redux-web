import React from "react";
import { Modal, Button} from "react-bootstrap";
import Select from "react-select";
import '../dialog.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

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
        this.state = {
            actionName: 'action',
            tags:['Work'],
            dueDate: moment().format('YYYY-MM-DD'),
            status:'To Do',
        }
    }

    getToDoItem = () =>{
        return {
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

    setItemState = () => {
      this.setState({

      });
    };

    render() {
        const {
            onAddItem,
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
                                    defaultValue={[tagOptions[2]]}
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
;                                   this.setState({dueDate : date.format('YYYY-MM-DD')});
                                }}
                                selected={moment(this.state.dueDate)}
                            />
                        </div>

                        <div className="dialog-body-item">
                            <label className="dialog-label">Status : </label>
                            <div className="dialog-select-input">
                                <Select onChange={(event)=>{this.setState({status : event.value});}}
                                    defaultValue={[statusOptions[0]]}
                                    options={statusOptions}
                                />
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={()=>{
                            onAddItem(this.getToDoItem());
                            this.props.closeDialog()
                        }}>Add</Button>
                        <Button onClick={()=>{this.props.closeDialog()}}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}