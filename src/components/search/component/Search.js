import React from "react";
import '../serach.css'
export default class Search extends  React.Component{

    constructor(props){
        super(props);
        this.state ={
            searchName : "",
        };

    }
    onCompleteInput =(event) =>{
        if (event.keyCode === 13){
            let arr = this.props.bakLists.filter(item => item.actionName.indexOf(this.state.searchName) !== -1);
            this.props.onFilterItemByName(arr);
        }
    };

    onGetInputName = (event) => {
        this.setState({
            searchName: event.target.value,
        });
    };

    render() {
        return (
            <div className="search-container">
                <input id="searchInput" onKeyDown={this.onCompleteInput} onChange={(event)=>{this.onGetInputName(event)}} />
                <label>Advanced</label>
            </div>
        );
    }
}
