import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login_form';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key='login'
        component={LoginForm}
        title="Please Login"
      />
    </Router>
  );
};

export default RouterComponent;
