import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from './pages/GlobalState';
import { store, persistor } from "./pages/GlobalState/store/store";
// import Axios from './Axios'

function App() {
  return (
    <div>
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
