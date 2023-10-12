import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
        <button className='px-4 py-2 m-2 rounded-lg bg-gray-200'>{name}</button>
    </div>
  )
}

export default Buttons