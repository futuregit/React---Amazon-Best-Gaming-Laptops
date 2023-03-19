import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { laptops } from './laptops';
import Laptop from './Laptop';

function LaptopList() {
  return (
    <>
      <h1>amazon best gaming laptops</h1>
      <section className='laptoplist'>
        {laptops.map((laptop) => {
          return <Laptop {...laptop} key={laptop.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LaptopList />);
