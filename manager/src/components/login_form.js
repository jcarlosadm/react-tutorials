import React from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@provider.com'
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
