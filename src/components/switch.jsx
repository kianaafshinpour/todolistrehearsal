import React from "react";
import '../cssDesign/firstPart.css';
import { useDispatch } from "react-redux";
import {changeToggle} from '../redux/action'

 function Switch ({onClick}){
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(changeToggle());
    }
    return(
        <>
        <label for='checkbox' className="label" onClick={handleClick}>
            <div className="ball"></div>
        </label>
        </>
    );
 }export default Switch;