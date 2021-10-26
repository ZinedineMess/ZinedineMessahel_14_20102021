import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import React from 'react';
import { routes } from 'router/routes';

const App = () => {
  return (
      <Router>
        <div className="router-container">
          <Header />
            <Switch>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
        </div>
      </Router>
  );
}

export default App;
