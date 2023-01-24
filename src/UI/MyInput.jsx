import React from 'react'

const MyInput = ({ /* onChange, */ ...props }) => {
  return (
    <div className='box-input'>
      <input /* onChange={onChange} */ {...props} type="text" />
    </div>
  )
}

export default MyInput