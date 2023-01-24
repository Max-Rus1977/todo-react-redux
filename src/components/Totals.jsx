const Totals = ({
  countAll,
  countFinished,
  countExecution,
  sortedShowAll,
  sortedShowFinished,
  sortedShowInExecution,
}) => {


  return (
    <div className='box-totals'>
      <span onClick={() => sortedShowAll()}>Всего: {countAll}</span>
      <span onClick={() => sortedShowFinished()}>В процессе: {countExecution}</span>
      <span onClick={() => sortedShowInExecution()}>Закончено: {countFinished}</span>
    </div>
  )
}

export default Totals