import React from 'react';
import { screen, render } from '@testing-library/react';
import AddControls from './AddControls';
import { UserProvider } from '../../context/UserCtx';
import userEvent from '@testing-library/user-event';
import { LogControls } from './LogControls';

it('renders controls to input item', async () => {
    const {container} = render(
        <UserProvider>
            <LogControls />
            <AddControls />
        </UserProvider>
    );

    const userInput = screen.getByLabelText(/name-input/i)
    const logBtn = screen.getByLabelText(/log-button/i)

    userEvent.type(userInput, 'Izzie');
    userEvent.click(logBtn);

    const nameInput = await screen.findByLabelText(/new item input/i);
    const submitBtn = await screen.findByLabelText(/submit new item/i);

    expect(nameInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});