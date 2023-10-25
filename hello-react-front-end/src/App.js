import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => (
  <Routes>
    <Route path="/greeting" element={<Greeting />} />
    <Route
      path="/"
      element={(
        <div>
          <h1>Home</h1>
          <p>Welcome to the home page.</p>
        </div>
      )}
    />
  </Routes>
);

export default App;
