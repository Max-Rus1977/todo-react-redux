import { useState } from 'react'
import { useDispatch } from 'react-redux'

import ContentItem from './ContentItem'
import MyInput from '../../../UI/MyInput'
import MyButton from '../../../UI/MyButton'

const ToDoItem = ({ dataItem, index }) => {

  const [dataChang, setDataChang] = useState({ title: dataItem.title, text: dataItem.text })
  const [showFormChanges, setShowFormChanges] = useState(false)
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch({ type: 'DELETE_ITEM', id: dataItem.id })
  }

  const completedItem = () => {
    dispatch({ type: 'COMPLETED_ITEM', id: dataItem.id })
  }


  const changeTitle = (event) => {
    setDataChang({ ...dataChang, title: event.target.value })
  }

  const changeText = (event) => {
    setDataChang({ ...dataChang, text: event.target.value })
  }

  const changeItem = () => {
    if (dataItem.completed) {
      alert('Законченное задание менять нельзя!')
      return
    }

    setShowFormChanges(!showFormChanges)

    dispatch({ type: 'CHANGE_ITEM', data: { changedData: dataChang, id: dataItem.id } })

  }

  return (
    <div className={dataItem.completed ? 'box-todo completed' : 'box-todo'}>
      <div className="content-item">
        {
          showFormChanges
            ? <>
              <MyInput autoFocus onChange={changeTitle} value={dataChang.title} />
              <MyInput onChange={changeText} value={dataChang.text} />
            </>
            : <ContentItem index={index} dataItem={dataItem} />
        }
        <p>ID задачи: {dataItem.id}</p>
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