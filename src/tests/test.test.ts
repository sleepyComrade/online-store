import React from "react";
import {Footer} from '../components/footer/footer';
import { render, fireEvent } from '@testing-library/react';

test('fkg', () => {
    const a = render(React.createElement(Footer));
    expect(true);
})