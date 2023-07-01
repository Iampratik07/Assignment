import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminDashboard from './AdminDashboard';

const Admin = () => {
  return (
    <div>
      <h2>Admin Module</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/home">Home</Link>
          </li>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/admin/home" component={AdminHome} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </div>
  );
};

export default Admin;
