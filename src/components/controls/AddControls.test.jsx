import React from 'react';
import { screen, render } from '@testing-library/react';
import AddControls from './AddControls';

it('renders controls to input user', () => {
    const {container} = render(
        <AddControls />
    );

    const nameInput = screen.getByLabelText(/new item input/i);
    const submitBtn = screen.getByLabelText(/submit new item/i);

    expect(nameInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});