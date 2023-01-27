import React from "react";
import {Footer} from '../components/footer/footer';
import { render, fireEvent } from '@testing-library/react';
import {Counter} from './test-component';
import {Test1} from './test-component2';

test('fkg', () => {
    const a = render(React.createElement(Footer));
    expect(true);
})

test('fkg', () => {
    const a = render(React.createElement(Counter));
    const result = a.getByTestId('result');
    expect(result.textContent).toBe('0');
    const inc = a.getByTestId('inc');
    const dec = a.getByTestId('dec');
    fireEvent.click(inc);
    expect(result.textContent).toBe('1');
    fireEvent.click(inc);
    expect(result.textContent).toBe('2');
    fireEvent.click(dec);
    expect(result.textContent).toBe('1');
})

test('fkg', (resolve) => {
    setTimeout(() => {
        expect(false).toBe(false);
        resolve();
    })
})

test('fkg', () => {
    return new Promise(res => {
        setTimeout(() => {
            expect(false).toBe(false);
            res(null);
        })
    })    
})

test('fkg', async () => {
    return await new Promise(res => {
        setTimeout(() => {
            expect(false).toBe(false);
            res(null);
        })
    })    
})

test('fkg', async () => {
    return await new Promise(res => {
        setTimeout(() => {
            expect(false).toBe(false);
            res(null);
        })
    })    
})

function fetch() {
    return Promise.resolve({
        json: () => Promise.resolve([])
    }) 
}
(window.fetch as any) = fetch;

test('fkg',  () => {
    const a = render(React.createElement(Test1));  
})