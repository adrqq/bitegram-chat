import React from 'react';
import s from './App.module.scss';
import ChatItem from './components/ChatItem/ChatItem';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="s.app">
      <Sidebar />

      <ChatItem />
    </div>
  );
}

export default App;
