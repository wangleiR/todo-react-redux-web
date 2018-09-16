import React from "react";
import Chart from '../components/chart'
import Search from "../components/search";
const Statistic = () => {
    return (
        <div className="todo-panel">
           <Search />
           <Chart />
        </div>
    );
};

export default Statistic;