import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import filterCompleted from '../utils/filterCompleted'

const Totals = () => {

  const [active, setActive] = useState([true, false, false])

  const dispatch = useDispatch()
  const arrItemsData = useSelector((state) => state.todoReducer.arrItemsData)
  const finished = filterCompleted(true, arrItemsData)

  const getType = (event) => {

    const arrActive = [...active]
    arrActive.forEach((type, index, arr) => arr[index] = false)
    arrActive[event.target.id] = true

    dispatch({ type: 'FILTERS', numberFilter: +event.target.id })

    setActive(arrActive);
  }

  return (
    <div className='box-totals'>
      <span
        id='0'
        className={active[0] ? 'totals-btn total-active' : 'totals-btn'}
        onClick={getType}
      >
        Всего: {arrItemsData.length}
      </span>
      <span
        id='1'
        className={active[1] ? 'totals-btn total-active' : 'totals-btn'}
        onClick={getType}
      >
        В процессе: {arrItemsData.length - finished.length}
      </span>
      <span
        id='2'
        className={active[2] ? 'totals-btn total-active' : 'totals-btn'}
        onClick={getType}
      >
        Закончено: {finished.length}
      </span>
    </div>
  )
}

export default Totals