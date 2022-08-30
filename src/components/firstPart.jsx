import React from "react";
import '../cssDesign/firstPart.css';
import ToDoListBox from "./toDoListBox";
import CheckBox from './checkbox';
import Switch from './switch';
import {useSelector} from 'react-redux'

function FirstPart(){
    const check = useSelector(state => state.toggled)
    return(
        <>
        <div className={check ? "body-dark-mode" : "body-light-mode"}>
            <div className="header"></div>           
            <div className="toggleCountainer">
            <CheckBox/>
            <Switch />
            <ToDoListBox/>
            </div>
        </div>
        </>
    );
}export default FirstPart;