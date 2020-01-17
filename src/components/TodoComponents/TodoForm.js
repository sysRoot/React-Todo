import React from 'react';

const TodoForm = ({ newTodo, inputChange, formSubmit, clearComplete }) => {
    return (
        <form onSubmit={formSubmit}>
            <input value={newTodo} type="text" name="newTodo" onChange={inputChange} />
            <button onClick={formSubmit}>Add</button>
            <button onClick={clearComplete}>Clear Complete</button>
        </form>
    );
};

export default TodoForm;
