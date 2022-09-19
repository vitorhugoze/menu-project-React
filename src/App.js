import React from 'react'
import { useState } from 'react';
import items from './data'
import Menu from './Menu';
import Categories from './Categories';
import './App.css';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all'){
      setItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setItems(newItems);
  }

  return <main>
    <section className='menuSection'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <div className='menuContainer'>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </div>
    </section>
  </main>
}

export default App;
