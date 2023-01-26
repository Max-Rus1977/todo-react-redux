import { useState } from 'react'

import ContentItem from './ContentItem'
import MyInput from '../../../UI/MyInput'
import MyButton from '../../../UI/MyButton'

const ToDoItem = ({ dataItem, changeItem, deleteItem, index, completedItem }) => {

  const [showFormChanges, setShowFormChanges] = useState(false)
  const [dataChanges, setDataChanges] = useState({ title: dataItem.title, text: dataItem.text })

  const finished = () => {
    completedItem(dataItem.id)
  }

  const changeTitle = (event) => {
    setDataChanges({ ...dataChanges, title: event.target.value })
  }

  const changeText = (event) => {
    setDataChanges({ ...dataChanges, text: event.target.value })
  }

  const getChangeItem = () => {

    if (showFormChanges) {

      changeItem(dataItem.id, dataChanges)
    }

    setShowFormChanges(!showFormChanges)
  }

  const removeItem = () => {
    deleteItem(dataItem.id)
  }

  return (
    <div className={dataItem.completed ? 'box-todo completed' : 'box-todo'}>
      <div className="content-item">
        {
          showFormChanges
            ? <>
              <MyInput autoFocus onChange={changeTitle} value={dataChanges.title} />
              <MyInput onChange={changeText} value={dataChanges.text} />
            </>
            : <ContentItem index={index} dataItem={dataItem} />
        }
        <p>ID задачи: {dataItem.id}</p>
      </div>
      <div className="actions">
        <MyButton
          className={dataItem.completed ? 'btn-comped ' : ''}
          onClick={finished}
        >
          ✓
        </MyButton>
        <MyButton className='btn-patch' onClick={getChangeItem}>⚒</MyButton>
        <MyButton className='btn-delete' onClick={removeItem}>✖</MyButton>
      </div>
    </div>
  )
}

export default ToDoItem