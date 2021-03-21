import React, {useContext, useState} from 'react';
import {Button} from '../../StyledComponents/Button'
import './AddItemModal.css';

export const AddItemModal = ({onConfirm})=> {
const [name, setName] = useState("");
const [cal, setCal] = useState("");
const [fat, setFat] = useState("");
const [carb, setCarb] = useState("");
const [pro, setPro] = useState("");

const saveInput=(e)=>{
    if(e.target.name==="name")
        setName(e.target.value);
    if(e.target.name==="cal")
        setCal(e.target.value);
    if(e.target.name==="fat")
        setFat(e.target.value);
    if(e.target.name==="carb")
        setCarb(e.target.value);
    if(e.target.name==="pro")
        setPro(e.target.value);
}

  return (
      <>
            <div className="modal-error">Please fill all details before you submit</div>
            <div data-testid="modal-input" className="modal-input">
                Dessert Name*<input type="text" data-testid="name" id="name" name="name" onChange={(e)=>saveInput(e)} />
            </div>
            <div className="modal-input">
                Calories*<input type="number" data-testid="cal" id="cal" name="cal" onChange={(e)=>saveInput(e)} />
            </div>
            <div className="modal-input">
                Fat*<input type="number" data-testid="fat" id="fat" name="fat"  onChange={(e)=>saveInput(e)} />
            </div>
            <div className="modal-input">
                Carbs*<input type="number" data-testid="carb" id="carb" name="carb" onChange={(e)=>saveInput(e)} />
            </div>
            <div className="modal-input">
                Protein*<input type="number" data-testid="pro" id="pro" name="pro" onChange={(e)=>saveInput(e)} />
            </div>
            <Button disabled={name==="" || cal==="" || fat==="" || carb==="" || pro ===""}
                buttonStyle="Bordlerless" 
                className={`btn btn-submit ${(name==="" || cal==="" || fat==="" || carb==="" || pro ==="") ?"disabled":""}`} 
                type="button"
                onClick={()=>onConfirm(name,cal, fat, carb, pro)}
                id="pre-page-submit" 
                data-testid="pre-page-submit">
                <i className="icon-check" /> Submit
            </Button>
            </>

  );
}