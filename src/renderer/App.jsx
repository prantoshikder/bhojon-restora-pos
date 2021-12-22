import { blue } from '@ant-design/colors';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

const App = () => {
  console.log(blue);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
