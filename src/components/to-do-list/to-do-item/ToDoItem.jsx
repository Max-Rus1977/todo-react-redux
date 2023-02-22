import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useInputData } from '../../../hook/useInputData'
import { actionRemove, actionCompleted, actionChange } from '../../../actions'

import ContentItem from './ContentItem'
import MyInput from '../../../UI/MyInput'
import MyButton from '../../../UI/MyButton'

const ToDoItem = ({ dataItem, index }) => {

  const [showFormChanges, setShowFormChanges] = useState(false)
  const dispatch = useDispatch()

  const [getTitle, getText, data] = useInputData(dataItem)

  const removeItem = () => {
    dispatch(actionRemove(dataItem.id))
  }

  const completedItem = () => {
    dispatch(actionCompleted(dataItem.id))
  }

  const changeItem = () => {
    if (dataItem.completed) {
      alert('Законченное задание менять нельзя!')
      return
    }

    if (showFormChanges) {
      dispatch(actionChange(dataItem.id, data))
    }

    setShowFormChanges(!showFormChanges)

  }

  return (
    <div className={dataItem.completed ? 'box-todo completed' : 'box-todo'}>
      <div className="content-item">
        {
          showFormChanges
            ? <>
              <MyInput autoFocus onChange={getTitle} value={data.title} />
              <MyInput onChange={getText} value={data.text} />
            </>
            : <ContentItem index={index} dataItem={dataItem} />
        }
      </div>
      <div className="actions">
        <MyButton
          className={dataItem.completed ? 'btn-comped' : ''}
          onClick={completedItem}
        >
          ✓
        </MyButton>
        <MyButton className='btn-patch' onClick={changeItem}>⚒</MyButton>
        <MyButton className='btn-delete' onClick={removeItem}>✖</MyButton>
      </div>
    </div>
  )
}

export default ToDoItem