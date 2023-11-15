import React, { useState } from 'react';
import { Container, StyledButton, StyledCard, Header, List, Input } from './Styles/TodoList.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <Container>
            <Header>
                <p>Todo List</p>
            </Header>
            <StyledCard>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    data-testid="todo-input"
                    placeholder='Add  New  Todo'
                />
                <StyledButton onClick={handleAddTodo} data-testid="add-todo">Add</StyledButton>

                {todos.map((todo, index) => (
                    <List key={index}>
                        {todo}
                        <button
                            style={{ backgroundColor: 'transparent', float: "right", border: "none", cursor: "pointer" }}
                            onClick={() => handleDeleteTodo(index)}
                            data-testid={`delete-todo-${index}`}>
                            <FontAwesomeIcon icon={faClose} color="red" size="lg" />
                        </button>
                    </List>

                ))}
            </StyledCard>
        </Container>
    );
}

export default TodoList;
