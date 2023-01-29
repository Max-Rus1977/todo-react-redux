import { useDispatch } from 'react-redux'

import { useState } from 'react'

import ContentItem from './ContentItem'
import MyInput from '../../../UI/MyInput'
import MyButton from '../../../UI/MyButton'

const ToDoItem = ({ dataItem, index }) => {

  const [isCompleted, setIsCompleted] = useState()

  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch({ type: 'DELETE_ITEM', id: dataItem.id })
  }

  const completedItem = () => {


    dispatch({ type: 'COMPLETED_ITEM', data: { index: index, isCompleted: isCompleted } })
  }

  return (
    <div className={dataItem.completed ? 'box-todo completed' : 'box-todo'}>
      <div className="content-item">
        {
          /* showFormChanges
            ? <>
              <MyInput autoFocus onChange={changeTitle} value={dataChanges.title} />
              <MyInput onChange={changeText} value={dataChanges.text} />
            </>
            :  */<ContentItem index={index} dataItem={dataItem} />
        }
        <p>ID задачи: {dataItem.id}</p>
      </div>
      <div className="actions">
        <MyButton
          className='btn-comped'
          onClick={completedItem}
        >
          ✓
        </MyButton>
        <MyButton className='btn-patch' /* onClick={getChangeItem} */>⚒</MyButton>
        <MyButton className='btn-delete' onClick={removeItem}>✖</MyButton>
      </div>
    </div>
  )
}

export default ToDoItem