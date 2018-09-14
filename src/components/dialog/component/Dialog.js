import React from "react";
import { Modal, Button} from "react-bootstrap";
import Select from "react-select";
import '../dialog.css';

const statusOptions = [
    { value: 'To Do', label: 'To Do' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Done', label: 'Done' },
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
            actionName: '',
            tags:['Work'],
            dueDate:'',
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
                            <input name="actionName"/>
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

                        <div onChange={(event)=>{
                            this.setState({dueDate : event.target.value});
                        }}
                            className="dialog-body-item">
                            <label className="dialog-label">Due Date : </label>
                            <input name="dueDate" />
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