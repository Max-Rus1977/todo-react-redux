import { useSelector } from 'react-redux'

import ToDoItem from './to-do-item/ToDoItem'

const ToDoList = () => {

  const arrItemsData = useSelector((store) => store.todoReducer.arrItemsData)
  const numFilter = useSelector((store) => store.filtersReducer)

  console.log(numFilter);

  function filter(type) {

    if (type === 0) {
      return arrItemsData
    }
    else if (type === 1) {
      return [...arrItemsData].filter((item) => item.completed === false)
    }
    else if (type === 2) {
      return [...arrItemsData].filter((item) => item.completed === true)
    }
  }

  return (
    <div className="todo-list">
      {filter(numFilter).map((item, index) =>
        < ToDoItem
          key={item.id}
          index={index}
          dataItem={item}
        />

      )}
    </div>
  )
}

export default ToDoList