import React, {useContext, useEffect,useState} from 'react';
import {Button} from '../../components/StyledComponents/Button'
import {NutritionTable} from '../../components/TableItems/NutritionTable'
import { AppContext } from '../../Context/AppContext';
import './MainView.css';

export const MainView = ()=> {
    const context = useContext(AppContext);
    const [dataTable, setDataTable] = useState(context.dataTable);
    const [asc, setAsc] = useState(true);

    useEffect(()=>{
        if(context.dataTable)
            setDataTable(context.dataTable);
    },[context.dataTable])

    const resetData = () => {
        setDataTable(context.dataTable);
    }

    const deleteItem = (selected)=> {
        setDataTable(dataTable.filter( ( el ) => !selected.includes( el.id )))
    }

    const addItem = (newItem) =>{
        setDataTable([...dataTable,newItem])
    }

    const sortData = ()=>{
        if(asc)
            setDataTable(dataTable.slice().sort((a, b) => (a.dessert > b.dessert) ? 1 : -1));
        else
            setDataTable(dataTable.slice().sort((a, b) => (a.dessert > b.dessert) ? -1 : 1));
        setAsc(!asc);
    }

  return (
    <div id="page-container" className="full-width">
        <div id="pre-page-content" data-testid="pre-page-content">
            <div className="pre-page-title">
            <h1>
                Nutrition List
            </h1>
            </div>

            <div className="pre-page-reset">
                <Button buttonStyle="Bordlerless" onClick={()=>resetData()} className="btn btn-reset" type="button" id="pre-page-reset" data-testid="pre-page-reset">
                    Reset Data
                </Button>
            </div>
        </div>
        
        <div id="page-content">
                <NutritionTable sortData={sortData} addItem={addItem} deleteItem={deleteItem} data={dataTable}/>
        </div>
    </div>
  );
}