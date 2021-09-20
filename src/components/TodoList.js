import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    function comparePriority(a, b) {
        if (a.priority < b.priority) {
            return -1;
        }

        if (a.priority > b.priority) {
            return 1;
        }

        return 0;
    }

    function handleRemove(id) {
        const newList = todos.filter((item) => item.text !== id);
        setTodos(newList);

    }

    const addTodo = todo => {
        console.log(todo);
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        todos.sort(comparePriority);
    };
    
    return (
        <div>
            <center><h3>Hey!!</h3></center>
            
            <TodoForm onSubmit={addTodo} />
                <center>
                {todos.map((item) => (
                    <h3
                        style={{
                            color: item.priority === '1' ? "red" :
                                (item.priority === '2' ? "blue" :
                                    (item.priority === '3' ? "pink" : "green"))
                        }}
                        key={item.text}>{item.text}
                        &nbsp; &nbsp;
                        <button
                            onClick={ ()=>handleRemove(item.text)}>Remove
                        </button>
                    </h3>
                ))}
                </center>
        </div>
    )
}

export default TodoList;
