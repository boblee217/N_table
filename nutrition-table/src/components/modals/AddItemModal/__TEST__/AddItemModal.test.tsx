import React from 'react'
import {AddItemModal} from '../AddItemModal'
import { fireEvent, render, screen, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test("Component renders", async ()=>{
    const {getByTestId} = render(<AddItemModal onConfirm={()=>{}}/> )
    expect(getByTestId('modal-input')).toBeDefined();    
})

test("Component renders", async ()=>{
    const {getByTestId} = render(<AddItemModal onConfirm={()=>{}}/> )
    fireEvent.change(getByTestId('name'), {target: {value:"ABC"}});
    fireEvent.change(getByTestId('cal'), {target: {value:"12"}});
    fireEvent.change(getByTestId('fat'), {target: {value:"12"}});
    fireEvent.change(getByTestId('carb'), {target: {value:"12"}});
    fireEvent.change(getByTestId('pro'), {target: {value:"12"}});
    expect(getByTestId('name')).toHaveValue('ABC');
    fireEvent.click(getByTestId('pre-page-submit'));
})
