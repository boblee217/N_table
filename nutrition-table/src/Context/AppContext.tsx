import React, {useContext, useState, useEffect} from 'react'
import {LOAD_ITEMS} from '../components/GraphQL/Queries'
import { useQuery, gql } from "@apollo/client";

export const AppContext = React.createContext()
export const useAppContext =()=> useContext(AppContext);

export const AppContextProvider = (props:any) =>{
    const {error, loading, data} = useQuery(LOAD_ITEMS);
    const [dataTable, setDataTable] = useState([]);
    
    useEffect(()=>{
        if(data)
            setDataTable(data.getAllItems);
    },[data])

    const context = {
        dataTable,
        setDataTable: ()=>{}
    }
    return <AppContext.Provider value={context} {...props}/>;
}

