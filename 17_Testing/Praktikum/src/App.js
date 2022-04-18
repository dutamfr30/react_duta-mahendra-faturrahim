// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from "./components";
// import IntroductionReact from "./components/IntroductionReact";
// import ReactFundamental from "./components/ReactFundamental";
// import ReactRouting from "./components/ReactRouting";
// import EventHandling from "./components/EventHandling";
// import ReactHook from "./components/ReactHook";
// import ReactForm from "./components/ReactForm";
// import GlobalState from "./components/GlobalState";
// import IntroductionReactIndex from "./pages/IntroductionReact";
// import IntroductionReactContact from "./pages/IntroductionReact/contact_us";
// import ReactFundamentalIndex from './pages/ReactFundamental';
// import ReactRoutingIndex from './pages/ReactRouting';
// import ReactFormIndex from "./pages/ReactForm";
// import EventHandingIndex from "./pages/EventHandling";
// import ReactHookIndex from "./pages/ReactHook";
// import GlobalStateIndex from "./GlobalState";

// import "bootstrap/dist/css/bootstrap.css";
// import "./assets/bootstrap-icons/bootstrap-icons.css";
// import "./components/style.css";
// import './pages/IntroductionReact/assets/css/bootstrap.min.css';
// import './pages/IntroductionReact/assets/css/main.css';
// import './pages/IntroductionReact/assets/css/form.css';
// import "./pages/ReactFundamental/components/ToDoList.module.css";
// import './pages/EventHandling/components/Todos.css';
// // import Axios from './Axios'

// function App() {
//   return (
//     <div>
//       <Router>
//         <Switch>
//           <Route path="/" exact component={Home}/>
//           <Route path="/introduction-react" exact component={IntroductionReact}/>
//           <Route path="/react-fundamental" exact component={ReactFundamental} />
//           <Route path="/react-routing" exact component={ReactRouting} />
//           <Route path="/event-handling" exact component={EventHandling} />
//           <Route path="/react-hook" exact component={ReactHook} />
//           <Route path="/react-form" exact component={ReactForm} />
//           <Route path="/global-state" exact component={GlobalState} />
//           <Route path="/introduction-react-index" exact component={IntroductionReactIndex}/>
//           <Route path="/introduction-react-contact" exact component={IntroductionReactContact}/>
//           <Route path="/react-fundamental-index" exact component={ReactFundamentalIndex} />
//           <Route path="/react-routing-index" exact component={ReactRoutingIndex} />
//           <Route path="/react-form-index" exact component={ReactFormIndex} />
//           <Route path="/event-handling-index" exact component={EventHandingIndex} />
//           <Route path="/react-hook-index" exact component={ReactHookIndex} />
//           <Route path="/global-state-index" exact component={GlobalStateIndex} />
//         </Switch>
//     </Router>
      
//       {/* <Axios /> */}
//     </div>
//   );
// }

// export default App;

import useInputValue from './pages/Testing/useInputValue';

function App() {
  return(
    <useInputValue />
  );
}

export default App;