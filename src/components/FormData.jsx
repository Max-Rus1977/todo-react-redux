import { useState } from 'react'
import { useDispatch } from 'react-redux'

import MyInput from '../UI/MyInput'
import MyTextarea from '../UI/MyTextarea'
import MyButton from '../UI/MyButton'

const FormData = () => {

  const [dataForm, setDataForm] = useState({ inputValue: '', textareaValue: '' })

  const dispatch = useDispatch()

  const getDataForm = (event) => {
    event.preventDefault()

    const newItem = {
      id: Date.now(),
      completed: false,
      title: dataForm.inputValue,
      text: dataForm.textareaValue,
    }

    dispatch({ type: 'ADD_ITEM', newItem })

    setDataForm({ inputValue: '', textareaValue: '' })

  }


  const getOneChangeInput = (event) => {
    setDataForm({ ...dataForm, inputValue: event.target.value })
  }

  const getOneChangeTextarea = (event) => {
    setDataForm({ ...dataForm, textareaValue: event.target.value })
  }

  return (
    <form className='form-data' onSubmit={getDataForm}>
      <h3>Создать задачу</h3>
      <MyInput
        className='input-title'
        onChange={getOneChangeInput}
        value={dataForm.inputValue}
      />
      <MyTextarea
        nameClassBox='box-textarea'
        className='textarea-text'
        onChange={getOneChangeTextarea}
        value={dataForm.textareaValue}
      />
      <MyButton className='btn-add'>add to do</MyButton>
    </form>
  )
}

export default FormData