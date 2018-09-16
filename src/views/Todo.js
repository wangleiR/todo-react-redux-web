import React from "react";
import TodoList from '../components/todoList';
import Search from '../components/search';
import Header from "./Header";

const Todo = () => {
    return (
        <div>
            <Header />
            <div className="tabs-body">
                <div className="todo-panel">

                    <Search />
                    <TodoList />
                </div>
            </div>
        </div>
    );
};

export default Todo;