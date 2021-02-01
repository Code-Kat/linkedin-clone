import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./header/Header";
import Sidebar from './body/Sidebar';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
