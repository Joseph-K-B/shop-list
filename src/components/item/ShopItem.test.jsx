import React from 'react';
import { screen, render } from '@testing-library/react';
import ShopItem from './ShopItem';

it('renders item name and controls', () => {
    const {container} = render(
        <ShopItem item={{id: 1, name: 'test', done: false}} />
    );

    const item = screen.getByLabelText(/list-item/i)

    expect(item).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});