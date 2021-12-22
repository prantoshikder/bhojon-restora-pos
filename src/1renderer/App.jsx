import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

const Hello = () => {
  return <div>Helo</div>;
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
