import ToDoPage from './pages/ToDoPage';
import { mockList } from './mockData';




function App() {
  return (
      <ToDoPage listApp={mockList}/>
  );
}

export default App;
