import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalState from 'context/GlobalState';
import Nav from 'components/Nav/Nav';
import React from 'react';
import { routes } from 'router/routes';

const App = () => {
  return (
    <GlobalState>
      <Router>
        <div className='router-container'>
          <Nav />
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
};

export default App;
