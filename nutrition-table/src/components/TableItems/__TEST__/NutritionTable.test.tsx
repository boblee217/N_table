import React from 'react'
import {NutritionTable} from '../NutritionTable'
import { fireEvent, render, screen, wait } from '@testing-library/react';
import { AppContext } from '../../../Context/AppContext';
import '@testing-library/jest-dom/extend-expect'

    const addItem = jest.fn();
    const deleteItem = jest.fn();
    const sortData =jest.fn();
    const MockDataTable = [
        {"id": "1", "dessert": "Oreo", "nutritionInfo": {"calories": 437,"fat": 18, "carb": 63,  "protein": 4 } },
        {"id": "2", "dessert": "Pancakes","nutritionInfo": {"calories": 437,"fat": 18, "carb": 63,  "protein": 4 } },
        {"id": "3", "dessert": "HotCakes","nutritionInfo": {"calories": 437,"fat": 18, "carb": 63,  "protein": 4 } },
        {"id": "4", "dessert": "Ice cream","nutritionInfo": {"calories": 437,"fat": 18, "carb": 63,  "protein": 4 } },
        {"id": "5", "dessert": "Coke Zero","nutritionInfo": {"calories": 437,"fat": 18, "carb": 63,  "protein": 4 } }
    ]


test("Component renders", async ()=>{
    const {getByTestId} = render(<NutritionTable sortData={sortData} addItem={addItem} deleteItem={deleteItem} data={MockDataTable}/> )
    expect(getByTestId('page-tools')).toBeDefined();    
})

test("Component renders and clicked on add item button, modal ap", async ()=>{
    const {getByTestId} = render(<NutritionTable sortData={sortData} addItem={addItem} deleteItem={deleteItem} data={MockDataTable}/> )
    fireEvent.click(getByTestId('pre-page-add'));
    //Opened add item modal
    await wait(()=>expect(getByTestId('modal-input')).toBeDefined())

})

test("Select all items and delete all items", async ()=>{
    const {getByTestId} = render(<NutritionTable sortData={sortData} addItem={addItem} deleteItem={deleteItem} data={MockDataTable}/> )
    fireEvent.click(getByTestId('check_selectAll'));
    expect(getByTestId('check-1')).toBeChecked();

    fireEvent.click(getByTestId('pre-page-delete'));
    expect(getByTestId('check-1')).toBeInTheDocument();
})

test("Click on add item", async ()=>{
    const {getByTestId} = render(<NutritionTable sortData={sortData} addItem={addItem} deleteItem={deleteItem} data={MockDataTable}/> )
    fireEvent.click(getByTestId('pre-page-add'));
    expect(getByTestId('name')).toBeInTheDocument();

    fireEvent.change(getByTestId('name'), {target: {value:"ABC"}});
    fireEvent.change(getByTestId('cal'), {target: {value:"12"}});
    fireEvent.change(getByTestId('fat'), {target: {value:"12"}});
    fireEvent.change(getByTestId('carb'), {target: {value:"12"}});
    fireEvent.change(getByTestId('pro'), {target: {value:"12"}});
    expect(getByTestId('name')).toHaveValue('ABC');
    fireEvent.click(getByTestId('pre-page-submit'));
    expect(addItem).toHaveBeenCalled();
})