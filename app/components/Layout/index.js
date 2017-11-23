import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';

import Guest from './Guest';
import Member from './Member';
import styles from './index.sass';

@inject('user') @observer
class Application extends React.Component {
  guessOrMember(){
    const { user } = this.props;

    if (user.signedIn) {
      return (<Member />);
    }
      return (<Guest/>);
  }

  render(){
    return(
      <div id='Layout' className={styles.layout}>
        <div className={classNames('pure-menu', 'pure-menu-horizontal', 'pure-menu-fixed', styles.mainNav)}>
          <Link to='/' className={classNames('pure-menu-heading', styles.heading)}>Invoiced</Link>
          {this.guessOrMember()}
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default { Application };
