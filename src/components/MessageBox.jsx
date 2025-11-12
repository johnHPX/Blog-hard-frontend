import { useEffect } from "react";
import "../styles/messageBox.css";

export default function MessageBox({ type = "success", message, onClose }) {
  
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`message-box ${type}`}>
      <p>{message}</p>
    </div>
  );
}
