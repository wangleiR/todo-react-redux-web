import React from "react";
import '../serach.css'
import {
    searchTodoListFromAPIAdvance,
} from "../../../restfulAPI/API";
import moment from "moment";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button} from "react-bootstrap";

export default class Search extends  React.Component{

    constructor(props){
        super(props);
        this.state ={
            searchNameOrTagsValue : "",
            beginDate : moment().format('YYYY-MM-DD'),
            endDate : moment().format('YYYY-MM-DD'),
            advanceShow: false,
        };

    }
    getSearchQueryParam = (beginDate,endDate) => {
       return {
           searchNameOrTagsValue : this.state.searchNameOrTagsValue,
           beginDate : beginDate,
           endDate : endDate,
       }
    };

    onCompleteInput =(event) =>{
        if (event.keyCode === 13){
            this.onSearch("","");
        }
    };

    onGetInputName = (event) => {
        this.setState({
            searchNameOrTagsValue: event.target.value,
        });
    };

    onSearch = (beginDate,endDate) => {
        this.props.getTodoListFromBackAPI(searchTodoListFromAPIAdvance(this.props.userToken,
            this.getSearchQueryParam(beginDate,endDate)));
    };

    render() {
        return (
            <div className="search-container">
                <input className="searchInput" onKeyDown={this.onCompleteInput} onChange={(event)=>{this.onGetInputName(event)}} />
                {
                    !this.state.advanceShow &&
                    <Button
                        onClick={()=>this.onSearch("","")}
                    >
                    Search
                    </Button>
                }
                <Button
                    onClick={() => this.setState({
                        advanceShow : !this.state.advanceShow,
                    })}
                >
                    Advanced
                </Button>
                {
                    this.state.advanceShow &&
                    <div className="search-container-advance">
                        <div className="search-container-advance-item">
                            <div className="item-label">开始时间 : </div>
                            <DatePicker
                                onChange={(date)=>{
                                    this.setState({beginDate : date.format('YYYY-MM-DD')});
                                }}
                                selected={moment(this.state.beginDate)}
                                placeholderText="Click to select a date"
                            />
                        </div>
                        <div className="search-container-advance-item">
                            <div className="item-label">结束时间 : </div>
                            <div><DatePicker
                                onChange={(date)=>{
                                    this.setState({endDate : date.format('YYYY-MM-DD')});
                                }}
                                selected={moment(this.state.endDate)}
                            /></div>
                        </div>
                        <div>
                            <Button
                                onClick={()=>this.onSearch(this.state.beginDate,this.state.endDate)}
                            >Search</Button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
