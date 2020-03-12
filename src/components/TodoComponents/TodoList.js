import React from 'react';
import Todo from './Todo';
import './Todo.css'
const TodoList = ({ todoItems, toggle }) => {
    return (
        <>
            <ol>
                {todoItems.map(todo => (
                    <Todo item={todo} toggle={toggle} />
                ))}
            </ol>
        </>
    );
};

export default TodoList;
