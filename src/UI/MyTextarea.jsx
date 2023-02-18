const MyTextarea = ({ nameClassBox, ...props }) => {
  return (
    <div className={nameClassBox}>
      <textarea {...props} ></textarea>
    </div>
  )
}

export default MyTextarea