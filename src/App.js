import { useState } from 'react';

import filterCompleted from './utils/filterCompleted';

import GenTitle from './components/GenTitle';
import Totals from './components/Totals';
import FormData from './components/FormData';
import Line from './UI/Line';
import ToDoList from './components/to-do-list/ToDoList';

import './style.css';

function App() {

  const [arrItemsObj, setArrItemsObj] = useState([
    { id: 1, completed: false, title: 'Первый Заголовок', text: 'Первый текст задачи' },
    { id: 2, completed: false, title: 'Второй заголовок', text: 'Второй текст задачи' },
    { id: 3, completed: false, title: 'Третий заголовок', text: 'Третий текст задачи' },
    { id: 4, completed: true, title: 'Четвёртый заголовок', text: 'Четвёртый текст задачи' },
  ])

  const [isType, setIsType] = useState('0')
  const [countId, setCountId] = useState(5)

  const getNewData = (title, text) => {
    const newItem = {
      id: countId,
      completed: false,
      title: title,
      text: text
    }
    setCountId(countId + 1)

    setArrItemsObj([newItem, ...arrItemsObj])
  }

  const getTypeSorted = (thisType) => {
    setIsType(thisType)
  }

  const sorted = (type) => {
    if (type === '0') {
      return arrItemsObj
    }
    else if (type === '1') {
      return filterCompleted(false, arrItemsObj)

    }
    else if (type === '2') {
      return filterCompleted(true, arrItemsObj)
    }
  }

  const completedItem = (id) => {
    const indexItem = arrItemsObj.findIndex((item) => item.id === id)
    const newArrItems = [...arrItemsObj]

    newArrItems[indexItem].completed = !newArrItems[indexItem].completed
    setArrItemsObj(newArrItems)

  }

  const changeItem = (id, newData) => {

    const oldItemIndex = arrItemsObj.findIndex((item) => item.id === id)
    const oldItem = arrItemsObj.find((item) => item.id === id)

    const arrChangeItem = [...arrItemsObj]
    arrChangeItem[oldItemIndex] = { ...oldItem, title: newData.title, text: newData.text }

    setArrItemsObj(arrChangeItem)
  }

  const deleteItem = (idItem) => {
    setArrItemsObj(arrItemsObj.filter((item) => item.id !== idItem))
  }

  const finishedItems = filterCompleted(true, arrItemsObj)

  return (
    <div className="app">
      <GenTitle nameClass='gen-title' titleText='Список дел на React' />
      <Totals
        allItems={arrItemsObj.length}
        finishedItems={finishedItems.length}
        getTypeSorted={getTypeSorted}
      />
      <FormData getNewData={getNewData} />
      <Line />
      <ToDoList
        arrItemsObj={sorted(isType)}
        deleteItem={deleteItem}
        changeItem={changeItem}
        completedItem={completedItem}
      />
    </div>
  );
}

export default App;
