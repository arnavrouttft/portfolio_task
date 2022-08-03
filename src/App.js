import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import ShowEvent from "./components/ShowEvent";
import HomePage from "./components/HomePage";


function App() {
  return (
    <Switch>
      <Route path='/' exact>
          <Redirect to='/travel/'/>
        </Route>

      <Route path={"/travel/"}>
      <HomePage/>
      </Route>

      <Route path={"/showevent/"}>

        <ShowEvent/>

      </Route>
    
    </Switch>
  );
}

export default App;
