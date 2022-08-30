import React from "react";
import '../cssDesign/todolistbox.css';
import {useDispatch} from 'react-redux';
import {deletItem} from '../redux/action';
import { FcEmptyTrash } from "react-icons/fc";

function ListItem({title,id}){
    const dispatch = useDispatch();
    const handleRemove=()=>{
        dispatch(deletItem(id))
    }
    return(
        <div className={'listItemCountainer'}>
            <p className="listItem">{title}</p>
            <button onClick={handleRemove} style={{background:"transparent",border:"none"}}><FcEmptyTrash  className="btn-remover"/></button>
        </div>
    );
}export default ListItem;