import React from 'react';
import { screen, render } from '@testing-library/react';
import EditControls from './EditControls';

it('renders controls to edit item', () => {
    const {container} = render(
        <EditControls item={{id: 1, name: 'test', done: false}}/>
    );

    const editBtn = screen.getByLabelText(/open update form/i);
    const deleteBtn = screen.getByLabelText(/open delete form/i);

    expect(editBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})