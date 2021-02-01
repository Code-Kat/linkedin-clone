import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./header/Header";
import Sidebar from './body/Sidebar';
import Feed from './body/Feed';


function App() {
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
