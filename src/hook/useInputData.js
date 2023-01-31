import { useState } from 'react'

export const useInputData = (data) => {
  const [dataChang, setDataChang] = useState({ title: data.title, text: data.text })

  const changeTitle = (event) => {
    setDataChang({ ...dataChang, title: event.target.value })
  }

  const changeText = (event) => {
    setDataChang({ ...dataChang, text: event.target.value })
  }

  return [changeTitle, changeText, dataChang, setDataChang]
}