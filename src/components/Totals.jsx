const Totals = () => {

  return (
    <div className='box-totals'>
      <span
        id='0'
        className='totals-btn total-active'
      // onClick={}
      >
        Всего: {0}
      </span>
      <span
        id='1'
        className='totals-btn total-active'
      // onClick={}
      >
        В процессе: {0}
      </span>
      <span
        id='2'
        className='totals-btn total-active'
      // onClick={}
      >
        Закончено: {0}
      </span>
    </div>
  )
}

export default Totals