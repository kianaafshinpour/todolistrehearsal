import React from "react";
import '../cssDesign/todolistbox.css';
import ListItem from "./listItem";
import {useSelector} from 'react-redux';

function List(){
    const list = useSelector(state => state.list)
    return(
        <>
        <ul className="todolist">
                    {list.map((l)=>(
                        <ListItem title={l.title} key={l.id} id={l.id}/>
                    ))}
            </ul>
        </>
    );
}
export default List;