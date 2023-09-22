import React from 'react';
import Row, { Column } from './Row';

export default function App () {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  return (
    <div>
      <Row>
      {products.map(product =>
        <Column
          key={product.id}
          title={product.title} 
        />
      )}
      </Row>
    </div>
  )
}