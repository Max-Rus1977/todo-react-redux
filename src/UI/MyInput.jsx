const MyInput = ({ ...props }) => {
  return (
    <div className='box-input'>
      <input  {...props} type="text" />
    </div>
  )
}

export default MyInput