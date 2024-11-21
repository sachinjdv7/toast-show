import React, { useState } from 'react';
import Toast from './Toast';

const FirstComponent = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShow = () => {
    setShowToast((prev) => !prev);
  };
  return (
    <div className="m-6 p-2">
      <button
        className="m-2 p-4 bg-blue-400 text-white rounded-lg"
        onClick={handleShow}
      >
        Show Toast Message
      </button>
      <span className="m-2 p-2 bg-blue-100 rounded-lg cursor-pointer">⚙️</span>
      {showToast && <Toast />}
    </div>
  );
};

export default FirstComponent;
