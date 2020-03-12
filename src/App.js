import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: [
                {
                    task: 'Organize Garage',
                    id: 1528817077286,
                    completed: false
                },
                {
                    task: 'Bake Cookies',
                    id: 1528817084358,
                    completed: true
                }
            ],
            newTodo: ``
        };
    }

    componentDidMount() {
        if (localStorage.getItem('todos')) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    todoItems: [...JSON.parse(localStorage.getItem('todos'))]
                }
            })
        }
    }
    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.todoItems))
      }
    inputHandler = e => this.setState({ [e.target.name]: e.target.value });

    formHandler = e => {
        e.preventDefault();
        if (this.state.newTodo !== ``) {
            this.setState(prevState => {
                
                return {
                    ...prevState,
                    todoItems: [
                        ...prevState.todoItems,
                        {
                            task: this.state.newTodo,
                            id: Date.now(),
                            completed: false
                        }
                    ],
                    newTodo: ``
                } 
                
            });
            
        }
    };

    clearHandler = e => {
        e.preventDefault();
        const nextState = [...this.state.todoItems].filter(item => item.completed === false);
        this.setState({todoItems: [...nextState]});
    };

    toggleHandler = id => {
        const nextState = {
            ...this.state,
            todoItems: this.state.todoItems.map(item => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        };
        this.setState(nextState);
    };
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <>
                <TodoForm
                    newTodo={this.state.newTodo}
                    inputChange={this.inputHandler}
                    formSubmit={this.formHandler}
                    clearComplete={this.clearHandler}
                />
                <TodoList
                    todoItems={this.state.todoItems}
                    toggle={this.toggleHandler}
                />
            </>
        );
    }
}

export default App;
