import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shopping from './Shopping';

it('allows user to add, update, and delete items', async () => {
    const {container} = render(
        <Shopping items={[{id: 1, name: 'test', done: false}]}/>
    );

    const nameInput = screen.getByLabelText(/new item input/i);
    const submitBtn = screen.getByLabelText(/submit new item/i);


    userEvent.type(nameInput, 'name');
    userEvent.click(submitBtn);

    const deleteBtn = await screen.findByLabelText(/open delete form/i);
    const editBtn = await screen.findByLabelText(/open update form/i);
    const newItem = await screen.findByLabelText(/list-item/i);
    
    expect(editBtn).toBeInTheDocument();

    userEvent.click(editBtn);
    const updateInput = await screen.findByLabelText(/update item input/i);
    const updateBtn = await screen.findByLabelText(/apply update/i);

    expect(updateInput).toBeInTheDocument();
    expect(updateBtn).toBeInTheDocument();
    
    userEvent.type(updateInput, 'better-name');
    userEvent.click(updateBtn);

    expect(deleteBtn).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(newItem).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});
