import { useDispatch } from 'react-redux'

import { useInputData } from '../hook/useInputData'
import { actionAddItem } from '../actions'

import MyInput from '../UI/MyInput'
import MyTextarea from '../UI/MyTextarea'
import MyButton from '../UI/MyButton'

const FormData = () => {

  const [getChangeTitle, getChangeText, dataForm, setDataChang] = useInputData({ title: '', text: '' })

  const dispatch = useDispatch()

  const getDataForm = (event) => {
    event.preventDefault()

    dispatch(actionAddItem(dataForm))

    setDataChang({ title: '', text: '' })
  }

  return (
    <form className='form-data' onSubmit={getDataForm}>
      <h3>Создать задачу</h3>
      <MyInput
        className='input-title'
        onChange={getChangeTitle}
        value={dataForm.title}
      />
      <MyTextarea
        nameClassBox='box-textarea'
        className='textarea-text'
        onChange={getChangeText}
        value={dataForm.text}
      />
      <MyButton className='btn-add'>add to do</MyButton>
    </form>
  )
}

export default FormData