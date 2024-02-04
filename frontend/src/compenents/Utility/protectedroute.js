import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ auth, children }) => {
  if (auth === undefined) {
    return null;
  }

  return auth ? children || <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
