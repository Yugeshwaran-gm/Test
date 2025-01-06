import React from 'react';
import './List.css';

const List = () => {
  return (
    <div>
      <div className='con1'>
        <ol className='order'>
          <li>
            Fruits
            <ul>
              <li>Apple</li>
              <li>Orange</li>
            </ul>
          </li>
          <li>
            Vegetables
            <ul>
              <li>Tomato</li>
              <li>Potato</li>
            </ul>
          </li>
          <li>
            Birds
            <ul>
              <li>Sparrow</li>
              <li>Eagle</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default List;
