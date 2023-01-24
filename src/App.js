import { useState } from 'react';

import filterCompleted from './utils/filterCompleted';

import GenTitle from './components/GenTitle';
import Totals from './components/Totals';
import FormData from './components/FormData';
import Line from './UI/Line';
import ToDoList from './components/to-do-list/ToDoList';

import './style.css';

function App() {

  const [arrItemsObj, setArrItemObj] = useState([
    { id: 1, completed: false, title: 'Заголовок', text: 'текст задачи' },
    { id: 2, completed: false, title: 'Второй заголовок', text: 'Второй текст задачи' },
    { id: 3, completed: false, title: 'Второй заголовок', text: 'Второй текст задачи' },
    { id: 4, completed: true, title: 'Второй заголовок', text: 'Второй текст задачи' },
  ])
  const [sorted, setSorted] = useState([])
  const [isSorted, setIsSorted] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [countId, setCountId] = useState(5)

  const sortedShowAll = () => {
    setIsSorted(false)
    setIsCompleted(false)
  }

  const sortedShowInExecution = () => {
    const execution = filterCompleted(true, arrItemsObj)
    setSorted(execution)
    setIsSorted(true)
    setIsCompleted(false)
  }

  const sortedShowFinished = () => {
    const finished = filterCompleted(false, arrItemsObj)
    setSorted(finished)
    setIsSorted(true)
    setIsCompleted(true)
  }

  const allCompleted = filterCompleted(true, arrItemsObj)
  const countCompleted = allCompleted.length

  const completedItem = (id) => {
    const indexItem = arrItemsObj.findIndex((item) => item.id === id)
    const newArrItems = [...arrItemsObj]

    newArrItems[indexItem].completed = !newArrItems[indexItem].completed

    if (!isCompleted) {
      const finished = filterCompleted(true, arrItemsObj)
      return setSorted(finished)
    }
    else if (isSorted) {
      const execution = filterCompleted(false, arrItemsObj)
      return setSorted(execution)
    }

    setArrItemObj(newArrItems)

  }

  const getNewData = (title, text) => {
    const newItem = {
      id: countId,
      completed: false,
      title: title,
      text: text
    }
    setCountId(countId + 1)

    setArrItemObj([newItem, ...arrItemsObj])
  }

  const changeItem = (id, newData) => {

    const oldItemIndex = arrItemsObj.findIndex((item) => item.id === id)
    const oldItem = arrItemsObj.find((item) => item.id === id)

    const arrChangeItem = [...arrItemsObj]
    arrChangeItem[oldItemIndex] = { ...oldItem, title: newData.title, text: newData.text }

    setArrItemObj(arrChangeItem)
  }

  const deleteItem = (idItem) => {
    setArrItemObj(arrItemsObj.filter((item) => item.id !== idItem))
  }

  return (
    <div className="app">
      <GenTitle nameClass='gen-title' titleText='Список дел на React' />
      <Totals
        countAll={arrItemsObj.length}
        countFinished={countCompleted}
        countExecution={arrItemsObj.length - countCompleted}
        sortedShowAll={sortedShowAll}
        sortedShowInExecution={sortedShowInExecution}
        sortedShowFinished={sortedShowFinished}
      />
      <FormData getNewData={getNewData} />
      <Line />
      <ToDoList
        arrItemsObj={isSorted ? sorted : arrItemsObj}
        deleteItem={deleteItem}
        changeItem={changeItem}
        completedItem={completedItem}
      />
    </div>
  );
}

export default App;
