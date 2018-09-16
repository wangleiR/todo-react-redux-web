import React from "react";
import {Pie} from 'react-chartjs-2';

export default class Chart extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            labels: [
                'To Do',
                'In Progress',
                'Blocked'
            ],
            data: [0, 0, 0],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
        }
        this.calculDifferentItemStatusNumber(this.props.lists);
    }

    getData =() => {
        return {
                labels : this.state.labels,
                datasets : [{
                    data: this.state.data,
                    backgroundColor: this.state.backgroundColor,
                    hoverBackgroundColor: this.state.hoverBackgroundColor,
                }]
            };
    };

    calculDifferentItemStatusNumber = lists => {
        lists.map(item => {
            if (item.status === "To Do") {
                return this.state.data[0]++;
            }else if (item.status === "In Progress") {
                return this.state.data[1]++;
            }else if (item.status === "Blocked") {
                return  this.state.data[2]++;
            }
        });
        this.setState({
            data: this.state.data,
        });

    };

    render() {
        return (
            <div>
                <Pie data={this.getData()}/>
            </div>
        );
    }
}
