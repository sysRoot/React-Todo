import React from 'react';
import { Button, Input } from 'boundless';
const TodoForm = ({ newTodo, inputChange, formSubmit, clearComplete }) => {
    return (
        <form onSubmit={formSubmit}>
            <Input
            inputProps={{
                placeholder: 'Add A Todo!',
                onChange: inputChange,
                value: newTodo,
                name: 'newTodo'
            }}
                
            
                
            />
            
                <Button onClick={formSubmit}>Add</Button>
                <Button onClick={clearComplete}>Clear Complete</Button>
            
        </form>
    );
};

export default TodoForm;
