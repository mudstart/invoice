import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import Page from 'components/Pages';
import buttons from 'styles/buttons.sass';

@inject('user') @observer
class New extends React.Component {
  submitForm = (e) => {
    e.preventDefault();

    const { user } = this.props;

    user.signIn(
      this.email.value,
      this.password.value,
    );
  }
  render() {
    const extras = <Link to='/users/sign_up'>Don't have and account?</Link>;
    const title = 'Sign In';
    return (
      <Page.Auth title={title} extras={extras}>
        <form className='pure-form pure-form-stacked' onSubmit={this.submitForm}>
          <label>Email</label>
          <input type='email' ref={node => { this.email = node; }}
                 placeholder='Email' className='pure-input-1' />
          <label>Password</label>
          <input type='password' ref={node => { this.password = node; }}
                 className='pure-input-1'/>
          <button className={`pure-button pure-input-1 ${buttons.base}`}>
            Sign In
          </button>
        </form>
    </Page.Auth>
    );
  }
}

export default New;
