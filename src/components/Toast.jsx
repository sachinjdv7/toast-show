import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="bg-green-400 p-5 rounded-lg">{message}</span>
      <span className="bg-black text-white rounded-lg">✖️</span>
    </div>
  );
};

export default Toast;
