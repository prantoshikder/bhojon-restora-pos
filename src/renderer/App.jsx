import SystemMenu from 'components/partials/SystemMenu';
import FoodManagement from 'pages/manageCategory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

const App = () => {
  return (
    <>
      <Router>
        <SystemMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/food-management" component={FoodManagement} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
