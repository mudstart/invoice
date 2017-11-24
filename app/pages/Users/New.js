import React from 'react';
import Page from 'components/Pages';
import { Link } from 'react-router';

class New extends React.PureComponent {
  render() {
    const extras = <Link to='/users/sign_in'>Want to login?</Link>;

    return(
      <Page.Auth title='Sign Up' extras={extras}>
        Yee
      </Page.Auth>
    );
  }
}

export default New;
