import React from 'react';

const Todo = ({ item, toggle }) => {
    return <p onClick={e => toggle(item.id) } style={item.completed ? {textDecoration: 'line-through'} : null} >{item.task}</p>;
};

export default Todo;
