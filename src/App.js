// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.json';
import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './pages/Main';

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState(() => {
    try {
      const saved = localStorage.getItem('library');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bag, setBag] = useState(() => {
    try {
      const saved = localStorage.getItem('bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag]);

  return (
    <>
      <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
        <Main />
      </AppContext.Provider>
    </>
  );
}

export default App;