import ToDoItem from "./to-do-item/ToDoItem"

const ToDoList = ({ changeItem, deleteItem, arrItemsObj, completedItem }) => {

  return (
    <div className="todo-list">
      {arrItemsObj.map((item, index) =>
        < ToDoItem
          key={item.id}
          index={index}
          dataItem={item}
          deleteItem={deleteItem}
          changeItem={changeItem}
          completedItem={completedItem}
        />
      )}
    </div>
  )
}

export default ToDoList