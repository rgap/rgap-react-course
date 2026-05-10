import React from "react";
import { createPortal } from "react-dom";

// A highly reusable Modal Component!
export function Modal({ isOpen, onClose, title, children }) {
  // If the modal isn't open, return null to render nothing
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
