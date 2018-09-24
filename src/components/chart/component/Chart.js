import React from "react";
import {Pie} from 'react-chartjs-2';
import moment from "moment";

export default class Chart extends  React.Component{

    constructor(props){
        super(props);
        this.chartStatusData = {
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
        };

        this.chartDateData = {
            labels: [
                'Out of date',
                'In 1 day',
                'In 3 day'
            ],
            data: [0, 0, 0],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#EF6384',
                '#36C2EB',
                '#FECE56'
            ],
        };

    }

    getData =(chartData) => {
        return {
                labels : chartData.labels,
                datasets : [{
                    data: chartData.data,
                    backgroundColor: chartData.backgroundColor,
                    hoverBackgroundColor: chartData.hoverBackgroundColor,
                }]
            };
    };

    calculDifferentItemStatusNumber = (lists) => {
        this.chartStatusData.data = [0,0,0];
        lists.map(item => {
            if (item.status === "To Do") {
                return this.chartStatusData.data[0]++;
            }else if (item.status === "In Progress") {
                return this.chartStatusData.data[1]++;
            }else if (item.status === "Blocked") {
                return  this.chartStatusData.data[2]++;
            }
        });

        this.chartDateData.data = [0,0,0];

        let now = moment().format('YYYY-MM-DD');
        lists.map(item => {
            let  dueDate = moment(item.dueDate).format('YYYY-MM-DD');
            if (moment(dueDate).isBefore(now)) { //Out of date
                return this.chartDateData.data[0]++;
            }else if (Math.abs(moment(now).diff(moment(dueDate))) <= 86400000) { //In 1 day
                return this.chartDateData.data[1]++;
            }else if (Math.abs(moment(now).diff(moment(dueDate))) <= 259200000) { //In 3 day
                return  this.chartDateData.data[2]++;
            }
        });

    };

    render() {
        return (
            <div>
                {
                    this.calculDifferentItemStatusNumber(this.props.lists)
                }
                <Pie
                    data={this.getData(this.chartStatusData)}
                    width={300}
                    height={100}
                />
                <Pie
                    data={this.getData(this.chartDateData)}
                    width={300}
                    height={100}
                />

            </div>
        );
    }
}
