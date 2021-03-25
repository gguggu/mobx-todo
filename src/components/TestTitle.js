import React from 'react';

const TestTitle = () => {
  return (
    <div
      style={{
        width: '100%',
        height:'100%',
        backgroundColor: '#adb5bd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        userSelect: 'none'
      }}
    >
      <span
        style={{
          color: 'white',
          fontSize: '2em',
          fontWeight: 'bold'
        }}
      >
        Welcome to React!
      </span>
      <span
        style={{
          color: '#495057',
          fontSize: '1.5em'
        }}
      >
        The structure of this project was created by Front-end Engineer <b>ttingho.</b>
      </span>
    </div>
  );
};

export default TestTitle;
