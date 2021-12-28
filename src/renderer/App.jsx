import SystemMenu from 'components/partials/SystemMenu';
import AddNewCategory from 'pages/AddNewCategory';
import AddNewFood from 'pages/AddNewFood';
import FoodManagement from 'pages/manageCategory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';
import AddNewAddons from './../pages/AddNewAddons/index';
import AllAddonsList from './../pages/AllAddonsList/index';
import AllCategoryList from './../pages/AllCategoryList/index';

const App = () => {
  return (
    <>
      <Router>
        <SystemMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/food-management" component={FoodManagement} />
          <Route exact path="/add-new-food" component={AddNewFood} />
          <Route exact path="/add-new-category" component={AddNewCategory} />
          <Route exact path="/category-list" component={AllCategoryList} />
          <Route exact path="/add-new-addons" component={AddNewAddons} />
          <Route exact path="/addons-list" component={AllAddonsList} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
