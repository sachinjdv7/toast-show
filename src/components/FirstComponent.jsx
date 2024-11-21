import React, { useState } from 'react';
import Toast from './Toast';

const FirstComponent = () => {
  const [toasts, setToasts] = useState([]);
  const [counter, setCounter] = useState(1);

  const handleShow = () => {
    const newToast = { id: counter, message: `Toast #${counter}` };
    setToasts((prev) => [...prev, newToast]);
    setCounter((prev) => prev + 1);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, 5000);
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
      <div className="mt-4 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} />
        ))}
      </div>
    </div>
  );
};

export default FirstComponent;
