const ContentItem = ({ index, dataItem }) => {
  return (
    <>
      <h3>{index + 1}. {dataItem.title}</h3>
      <p>{dataItem.text}</p>
    </>
  )
}

export default ContentItem