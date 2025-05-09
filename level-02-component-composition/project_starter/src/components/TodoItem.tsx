import type TTodoItem from "../types/TTodoItem"

interface TodoItemProps {
    item: TTodoItem, 
    list: TTodoItem[],
    updateList: (e: TTodoItem[]) => void
}

export default function TodoItem({item, list, updateList}: TodoItemProps) {
    const changeItemStatus = (id: number) => {
        const newList = list.map((todoItem) => {
            if (todoItem.id === id) {
                return {
                    ...todoItem,
                    done: !todoItem.done
                }
            }
            return todoItem
        })
        updateList(newList)
    }

    const itemLine = <p><b>{item.title}: </b>{item.content}</p>;
    return (
        <div className="todoItem">
            {item.done ? <del>{itemLine}</del> : itemLine}
            <button onClick={() => changeItemStatus(item.id)}>{item.done ? '✅' : '☑️'}</button>
        </div>
    )
}