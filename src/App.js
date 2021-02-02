import React, { useSelector } from "react";
import './App.css';
import Header from "./header/Header";
import Sidebar from './body/Sidebar';
import Feed from './body/Feed';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
