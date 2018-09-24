import React from "react";
import '../serach.css'
import {searchTodoListFromAPI} from "../../../restfulAPI/API";

export default class Search extends  React.Component{

    constructor(props){
        super(props);
        this.state ={
            searchNameOrTagsValue : "",
        };

    }
    getSearchQueryParam = () => {
       return {
           searchNameOrTagsValue : this.state.searchNameOrTagsValue,
       }
    };

    onCompleteInput =(event) =>{
        if (event.keyCode === 13){
            searchTodoListFromAPI(this.props.userToken,this.getSearchQueryParam(),this.props.getTodoListFromBackAPI);
        }
    };

    onGetInputName = (event) => {
        this.setState({
            searchNameOrTagsValue: event.target.value,
        });

    };

    render() {
        return (
            <div className="search-container">
                <input className="searchInput" onKeyDown={this.onCompleteInput} onChange={(event)=>{this.onGetInputName(event)}} />
                <label>Advanced</label>
            </div>
        );
    }
}
