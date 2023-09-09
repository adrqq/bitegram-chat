import React from 'react';
import './App.css';
import ChatItem from './components/ChatItem/ChatItem';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <ChatItem />
    </div>
  );
}

export default App;
