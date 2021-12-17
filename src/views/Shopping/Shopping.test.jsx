import React from 'react';
import Shopping from './Shopping';
import userEvent from '@testing-library/user-event';
import { UserProvider } from '../../context/UserCtx';
import { render, screen } from '@testing-library/react';

it('allows user to add, update, and delete items', async () => {
    const {container} = render(
        <UserProvider>
            <Shopping />
        </UserProvider>
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