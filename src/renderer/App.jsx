import { blue } from '@ant-design/colors';
import NewCategory from 'NewCategory';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

const App = () => {
  console.log(blue);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={NewCategory} />
      </Switch>
    </Router>
  );
};

export default App;
