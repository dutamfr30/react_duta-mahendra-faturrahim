import Home from './Home';
import { weeklyData } from './WeeklyData';

function App() {
  return (
    <div>
      <Home weeklys={weeklyData}/>
    </div>
  );
}

export default App;
