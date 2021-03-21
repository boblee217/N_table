import React, {useContext, useState, useEffect} from 'react';
import {NutritionCell} from '../../components/TableItems/NutritionCell'
import {ModalBox} from '../../components/modals/ModalBox'
import {Button} from '../../components/StyledComponents/Button'

export const NutritionTable = ({data, deleteItem, addItem, sortData})=> {
    const [selected, setSelected] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);

    const onClose=()=>{
        setShowModal(false);
    }

    const onConfirm=(name,cal, fat, carb, pro)=>{
        const nid = (data.map((i)=>parseInt(i.id)));
        const newItem = {id: (Math.max(...nid)+1).toString(),dessert: name, nutritionInfo: {calories: cal, fat, carb, protein: pro}}
        addItem(newItem)
        setShowModal(false);
    }

    const selectAll = () =>{
        if(selected.length===0)
            setSelected(data.map(item=>item.id))
        else
            setSelected([])
    }

    const setSelections =(e)=>{
        if(selected.includes(e.target.value)){
            setSelected(selected.filter(item=>item!==e.target.value))
        }else{
            setSelected(Array.from(new Set([...selected,e.target.value])))
        }
    }

    useEffect(()=>{
            setSelected([]);
    },[data])

  return (
  <>
    <div data-testid="page-tools" className="page-tools">
        <div className="page-selected">{selected.length} Selected</div>
        <div className="page-controls">
            <Button onClick={()=> setShowModal(true)} buttonStyle="Bordlerless" className="btn btn-add" type="button" id="pre-page-add" data-testid="pre-page-add">
                <i className="icon-pencil" /> Add New
            </Button>

            <Button disabled={selected.length<=0} onClick={()=>deleteItem(selected)} buttonStyle="Bordlerless" className={`btn btn-delete  ${selected.length<=0?"disabled":""}`} type="button" id="pre-page-delete" data-testid="pre-page-delete">
                <i className="icon-remove" /> Delete
            </Button>
        </div>
    </div>

    <div className="block-section">

     {data && data.length > 0 &&
        <table className="table table-hover" data-testid="data-table">
            <thead sorting>
                <tr>
                    <th className="span1 text-center sorting_asc">
                        <input data-testid="check_selectAll" checked={selected.length===data.length} type="checkbox" onClick={()=> selectAll()} />
                    </th>
                    <th className="span1 text-center sorting"><a href="#" className="sortText" onClick={()=>sortData()}>Dessert (100g serving)</a></th>
                    <th>Calories (g)</th>
                    <th className="hidden-phone">
                        Fat (g)
                    </th>
                    <th className="hidden-phone">Carbs (g)</th>
                    <th className="hidden-phone">Protein (g)</th>
                </tr>
            </thead>
            <tbody>
            {data.map((row)=>{
                return <NutritionCell key={row.id} preSelect={selected.includes(row.id)} id={row.id} setSelected={setSelections} name={row.dessert} nutritionInfo={row.nutritionInfo} />
            })        
            }
            </tbody>
        </table>
    }
    </div>
    {showModal && <ModalBox show={showModal} onClose={onClose} onConfirm={onConfirm}/>}
    </>
  );
}