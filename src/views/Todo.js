import React from "react";
import TodoList from '../components/todoList';
import Search from '../components/search';
import Header from "./Header";
import connect from "react-redux/es/connect/connect";
import Chart from "../components/chart";
import {Redirect} from "react-router-dom";

const Todo = (logged) => {
    return (
        <div>
            <Header />
            <div className="tabs-body">
                <div className="todo-panel">
                    {
                        logged.logged &&
                        <div>
                            <Search />
                            <TodoList />
                        </div>
                    }
                    {
                        !logged.logged  && <Redirect to="/login" />
                    }

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ isAuthenticated }) => ({
    logged: isAuthenticated.isSucceed
});

export default connect(mapStateToProps)(Todo);