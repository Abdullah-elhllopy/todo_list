import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
            const data = await response.json();
            setTodos(data);
            setFilteredTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleFilterChange = (e) => {
        const { value } = e.target;
        setFilterText(value);
        filterTodos(value);
    };

    const filterTodos = (filterValue) => {
        const filtered = todos.filter(todo =>
            todo.title.toLowerCase().includes(filterValue.toLowerCase())
        );
        setFilteredTodos(filtered);
    };

    return (
        <div>


            <div className="container">
                <h2>TODO LIST</h2>
                <h3>Todo</h3>
                <p>
                    <input  value={filterText}
                onChange={handleFilterChange} id="new-task" type="text" />
                </p>
                <ul id="incomplete-tasks">
                    {filteredTodos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
              
            </div>
        </div>
    );
};

export default TodoList;