import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoItems, toggle }) => {
    return (
        <>
            {todoItems.map(todo => (
                <Todo item={todo} toggle={toggle}/>
            ))}
        </>
    );
};

export default TodoList;
