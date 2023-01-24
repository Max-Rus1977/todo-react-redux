import React from 'react'

const GenTitle = ({ titleText, nameClass }) => {
  return (
    <h1 className={nameClass}>{titleText}</h1>
  )
}

export default GenTitle