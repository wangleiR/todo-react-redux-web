import React from "react";
import TodoList from '../components/todoList';
import Search from '../components/search';

const Todo = () => {
    return (
        <div className="todo-panel">
            <Search />
            <TodoList />
        </div>
    );
};

export default Todo;