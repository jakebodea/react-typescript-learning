import { useState } from "react";
import type TTodoItem from '../types/TTodoItem'

interface TodoFormProps {
    list: TTodoItem[], 
    updateList: (e: TTodoItem[]) => void
}

export function TodoForm({list, updateList}: TodoFormProps) {
    const [title, setTitle] = useState(""); 
    const [desc, setDesc] = useState("");
    const [id, setId] = useState(0);

    const addNewItem = (item: TTodoItem) => {
        updateList(list.concat([item]));
        setId(id+1);
        setTitle("");
        setDesc("")
    }
    
    return (
        <div className="form">
            <div className="formItem">
                <h4>Add a Title:</h4>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="formItem">
                <h4>Add a Description (or not, up to you):</h4>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <button type="submit" onClick={() => addNewItem({id: id, title:title, content:desc, done:false})}>Add to List</button>
        </div>

    )
}