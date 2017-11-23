import React from 'react';
import classNames from 'classnames';
import styles from './Layout.sass';
import { Link } from 'react-router';

const Layout = props =>
  <div id='Layout' className={styles.layout}>
    <div className={classNames('pure-menu', 'pure-menu-horizontal', 'pure-menu-fixed', styles.mainNav)}>
      <Link to='/' className={classNames('pure-menu-heading', styles.heading)}>Invoiced</Link>
      <ul className='pure-menu-list'>
          <li className='pure-menu-item'>
            <Link to='/users/sign_in' className={classNames('pure-menu-link', styles.link)}>Sign In</Link>
          </li>
      </ul>
    </div>
{props.children}
</div>;

  export default Layout;
