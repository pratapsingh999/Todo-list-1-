// TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import TodoList from './TodoList';

test('it should add a todo item to the list', () => {
    const { getByTestId, getByText } = render(<TodoList />);

    const inputElement = getByTestId('todo-input');
    const addButton = getByTestId('add-todo');

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const todoItem = getByText('New Todo');
    expect(todoItem).toBeInTheDocument();
});

test('it should change input field value', () => {
    const { getByTestId } = render(<TodoList />);

    const inputElement = getByTestId('todo-input');

    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(inputElement.value).toBe('New Value');
});

test('it should display list items using map', () => {
    const { getByTestId, getByText } = render(<TodoList />);

    const inputElement = getByTestId('todo-input');
    const addButton = getByTestId('add-todo');

    fireEvent.change(inputElement, { target: { value: 'Item 1' } });
    fireEvent.click(addButton);

    fireEvent.change(inputElement, { target: { value: 'Item 2' } });
    fireEvent.click(addButton);

    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
});

test('it should delete a todo item from the list', () => {
    const { getByTestId, queryByText } = render(<TodoList />);

    const inputElement = getByTestId('todo-input');
    const addButton = getByTestId('add-todo');

    // Add a new todo item
    fireEvent.change(inputElement, { target: { value: 'Item to be deleted' } });
    fireEvent.click(addButton);

    // Find and click the delete button inside the list item
    const deleteButton = getByTestId('delete-todo-0'); // Adjust the index based on your component's structure
    fireEvent.click(deleteButton);

    // Verify that the item is deleted
    const deletedItem = queryByText('Item to be deleted');
    expect(deletedItem).toBeNull();
});