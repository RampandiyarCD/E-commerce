import './Notification.css'
import { useEffect, useState } from 'react';

let trigger = null;
export function showMessage(message, type = 'info') {
  if (trigger) {
    trigger({ message, type });
  }
}

//red-error,orange-warning,green-created,info-blue

export function NotifiyPopup() {
  const [notification, setNotification] = useState({ message: '', type: 'info' });
  const [show, setShow] = useState(false);

  useEffect(() => {
    trigger = ({ message, type }) => {
      setNotification({ message, type });
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    };
    return () => {
      trigger = null;
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className={`container ${notification.type}`}>
      <p>{notification.message}</p>
    </div>
  );
}

