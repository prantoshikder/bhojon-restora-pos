import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
