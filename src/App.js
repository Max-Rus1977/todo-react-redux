import filterCompleted from './utils/filterCompleted';

import GenTitle from './components/GenTitle';
import Totals from './components/Totals';
import FormData from './components/FormData';
import Line from './UI/Line';
import ToDoList from './components/to-do-list/ToDoList';

import './style.css';

function App() {

  return (
    <div className="app">
      <GenTitle nameClass='gen-title' titleText='Список дел на React' />
      <Totals />
      <FormData />
      <Line />
      <ToDoList />
    </div>
  );
}

export default App;
