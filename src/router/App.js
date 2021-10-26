import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalState from 'context/GlobalState';
import Header from 'components/Header/Header';
import React from 'react';
import { routes } from 'router/routes';

const App = () => {
  return (
    <GlobalState>
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
    </GlobalState>
  );
}

export default App;
