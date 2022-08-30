import React,{useState} from "react";
import '../cssDesign/todolistbox.css';
import List from "./list";
import {useDispatch} from 'react-redux';
import{add} from '../redux/action';

function ToDoListBox(){
    const dispatch = useDispatch()
    const [inputValue,setInputValue] = useState('');
    const handleChangeInput=(e)=> setInputValue(e.target.value);
    const addToList= ()=>{
        const item = {title:inputValue,id: new Date().getTime()}
        if(inputValue){
            dispatch(add(item)) 
            setInputValue('') 
        }  
    }
    const handleKeyDown=(e)=>{
        if(e.key === "Enter"){
            addToList()
        }
    }
    return(
        <>
            <div className="counter">
                <h3 className="todoheader">To Do</h3>
                <input className="receiver" onChange={handleChangeInput} onKeyDown={handleKeyDown} value={inputValue} placeholder={'Enter your schedual items here'}/>
                <button onClick={addToList} disabled={!inputValue} className="btn-adder">+</button>
                <List/>
            </div>
        </>
    )
}export default ToDoListBox;