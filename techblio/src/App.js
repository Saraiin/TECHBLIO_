import React from 'react';

import Navibar from './components/Navibar';
import Book from './components/Book';
import Category from './components/Category';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-600">
      <Navibar />
      <Book />
      <Category />
      
      
    </div>
  );
}

export default App;