import React from 'react';

const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo;

    return (

        <li key={id} className={completed ? 'completed-tasks' : ''}> <label>{title}</label><input type="text" /></li>

    );
};

export default TodoItem;