import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');
    const [pri, setPri] = useState('');

    const handleChangeSelect = e => {
        e.preventDefault();
       
        setPri(e.target.value);
        
    };
    const handleChangeText = e => {
        e.preventDefault();
       
        setInput(e.target.value);

    };
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            priority:pri,
            text: input
        });
        setInput('');
    };
    return (
        <div>
            <center>
                <div>
                    <div>
                        <h2>TODO APP</h2><br></br>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="input"
                                value={input}
                                className="todo-input"
                                required
                                onChange={handleChangeText}
                            />
                            <select onChange={ handleChangeSelect}>
                                <option value="0">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <input type="submit" value="Add" name="Add"></input>

                        </form>
                    </div>
                </div>
            </center>       
        </div>
    )
}
export default TodoForm;
