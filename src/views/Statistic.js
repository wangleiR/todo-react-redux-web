import React from "react";
import Chart from '../components/chart'
import Search from "../components/search";
import {Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Header from "./Header";
const Statistic = ( logged ) => {
    return (
        <div>
            <Header />
        <div className="tabs-body">
        <div className="todo-panel">
            {
                logged.logged &&
                <div>
                    <Search/>
                    <Chart/>
                </div>
            }
            {
                !logged.logged  && <Redirect to="/" />
            }

        </div>
        </div>
        </div>
    );
};

const mapStateToProps = ({ isAuthenticated }) => ({
    logged: isAuthenticated
});

export default connect(mapStateToProps)(Statistic);
