import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './modules/NotFound';

// Lazy load the modules
const Admin = lazy(() => import('./modules/Admin'));
const User = lazy(() => import('./modules/User'));

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
