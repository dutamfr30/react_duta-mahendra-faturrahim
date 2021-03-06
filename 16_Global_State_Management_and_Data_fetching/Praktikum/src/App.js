// import ToDoPage from './pages/ToDoPage';
// import { mockList } from './mockData';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import ReactForm from './pages/React Form';
import "bootstrap/dist/css/bootstrap.css";
import "./components/assets/bootstrap-icons/bootstrap-icons.css";
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import "./components/style.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from './pages/GlobalState';
import { store, persistor } from "./pages/GlobalState/store/store";
// import Axios from './Axios'

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
      
      {/* <Axios /> */}
    </div>
  );
}

export default App;
