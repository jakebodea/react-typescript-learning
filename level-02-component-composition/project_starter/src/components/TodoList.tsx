import type TTodoItem from "../types/TTodoItem"
import TodoItem from "./TodoItem"


interface TodoListProps {
    list: TTodoItem[], 
    updateList: (e: TTodoItem[]) => void
}

export default function TodoList({list, updateList}: TodoListProps) {
    return (
        <div className="todoList">
            {list.length === 0 
            ? <h3>Add some items!</h3> 
            : list.map((item) => (
                <TodoItem item={item} list={list} updateList={updateList} />
            ))}
        </div>
    )
}

