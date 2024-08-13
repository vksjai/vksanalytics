// components/PopupModal.js
import React from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';

const PopupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-md max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create an Account</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <p>Please create an account to access more features.</p>
      </div>
    </div>,
    document.body
  );
};

export default PopupModal;
