import React from 'react';

function Admintitles({ txt }) {
  return (
    <p
      style={{
        marginBottom: '1px',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'cairo',
        opacity: '0.8',
      }}
    >
      {txt}
    </p>
  );
}
export default Admintitles;
