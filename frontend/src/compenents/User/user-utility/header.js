import React from 'react';

function Header({ txt, m }) {
  return (
    <p
      className={m ? 'mb-1' : ''}
      style={{
        fontSize: '23px',
        fontWeight: 'bold',
        fontFamily: 'cairo',
        opacity: '0.8',
      }}
    >
      {txt}
    </p>
  );
}

export default Header;
