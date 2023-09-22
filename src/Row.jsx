import React from 'react'

export default function Row ({children}) {
  return (
    <div className='manipulate-parent'>
        {React.Children.map(children, (child, index) => (
            <div className='manipulated-child'>{child}</div>
        ))}
    </div>
  )
}
