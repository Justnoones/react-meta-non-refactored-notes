import React from 'react';
import './Row.css';

export default function Row ({children}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="List">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isHighlighted: index === selectedIndex 
        })
      )}
      <hr />
      <button onClick={() => {
        setSelectedIndex(i =>
          (i + 1) % React.Children.count(children)
        );
      }}>
        Next
      </button>
    </div>
  );
}

export function Column ({ title, isHighlighted }) {
  return (
    <h1 className={[
      'Row',
      isHighlighted ? 'RowHighlighted' : ''
    ].join(' ')}>
      {title}
    </h1>
  )
}