import { useState, useEffect } from 'react';

const ProtectedRouteHook = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(true);

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData) {
          setUserData(parsedUserData);
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    }
  }, []);

  return [
    error ? undefined : userData.role === 'user', //  isUser
    error ? undefined : userData.role === 'admin_1/id=80226753244', //  isAdmin
    userData,
  ];
};

export default ProtectedRouteHook;
