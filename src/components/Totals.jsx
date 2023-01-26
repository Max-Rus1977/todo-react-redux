import { useState } from "react"

const Totals = ({ allItems, finishedItems, getTypeSorted }) => {

  const [isActive, setIsActive] = useState([true, false, false])

  const typeSorted = (event) => {

    const itemId = event.target.id

    const newIsActive = [...isActive]
    newIsActive.forEach((item, index, arr) => arr[index] = false)
    newIsActive[+itemId] = true

    setIsActive(newIsActive)
    getTypeSorted(itemId)
  }

  return (
    <div className='box-totals'>
      <span
        id='0'
        className={isActive[0] ? 'totals-btn total-active' : 'totals-btn'}
        onClick={typeSorted}
      >
        Всего: {allItems}
      </span>
      <span
        id='1'
        className={isActive[1] ? 'totals-btn total-active' : 'totals-btn'}
        onClick={typeSorted}
      >
        В процессе: {allItems - finishedItems}
      </span>
      <span
        id='2'
        className={isActive[2] ? 'totals-btn total-active' : 'totals-btn'}
        onClick={typeSorted}
      >
        Закончено: {finishedItems}
      </span>
    </div>
  )
}

export default Totals