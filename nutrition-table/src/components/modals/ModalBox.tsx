import React, {useEffect, useRef} from 'react';
import {AddItemModal} from './AddItemModal/AddItemModal'
import './ModalBox.css';

export const ModalBox = ({show,onClose, onConfirm})=> {
const modalMainRef = useRef(null);

useEffect(()=>{
if(modalMainRef && modalMainRef.current){
    modalMainRef.current.focus();
}
})
  return (
    <div className="modal-component">
    {show && (
        <>
        <div className="modal-dim" onClick={onClose} role="button" />
        <div ref={modalMainRef} className="modal-content">
            <AddItemModal onConfirm={onConfirm}/>
        </div>
        </>)
    }
    </div>
  );
}