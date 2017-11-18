import React from 'react';

const data = [
  { name: 'Jose Maduro', email: 'maduro@gmail.com' },
  { name: 'Pedro Perez', email: 'perez@gmail.com' },
  { name: 'Maria Abreu', email: 'abreu@gmail.com' },
];

const Contact = props =>
<div className='pure-u-1-3'>
  <h2>{props.name}</h2>
  <p>{props.email}</p>
</div>;


class Layout extends React.Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
        {data.map(info =>
          <Contact {...info} />
        )}
      </div>
    );
  }
}

export default Layout;
