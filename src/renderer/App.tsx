import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <div className="App">
      <h1>Bhojon Restora POS</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
