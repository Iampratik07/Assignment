import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import UserHome from './UserHome';
import UserProfile from './UserProfile';

const User = () => {
  return (
    <div>
      <h2>User Module</h2>
      <nav>
        <ul>
          <li>
            <Link to="/user/home">Home</Link>
          </li>
          <li>
            <Link to="/user/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/user/home" component={UserHome} />
        <Route exact path="/user/profile" component={UserProfile} />
      </Switch>
    </div>
  );
};

export default User;
