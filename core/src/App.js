import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SelectQuiz from "./components/SelectQuiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ SelectQuiz }></Route>
      </Switch>
    </Router>
  );
}

export default App;
