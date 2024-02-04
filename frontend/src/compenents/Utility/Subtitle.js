import React from 'react';

function Subtile({ text }) {
  return (
    <h2
      style={{ fontWeight: 'bold', opacity: '0.9', direction: 'rtl' }}
      className="mt-5"
    >
      {text}
    </h2>
  );
}

export default Subtile;
