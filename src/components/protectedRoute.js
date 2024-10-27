// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';
import axios from 'axios';
import config from '../config';

const baseUrl = process.env.NODE_ENV === 'development' ? config.development.apiBaseUrl : config.production.apiBaseUrl;

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const idToken = localStorage.getItem('idToken');
      if (!idToken) {
        setIsVerifying(false);
        return;
      }

      try {
        await axios.post(`${baseUrl}/`, {}, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
        });
        setIsValid(true);
      } catch (error) {
        console.error('Error verifying token:', error);
        localStorage.removeItem('idToken'); // Remove invalid token
      } finally {
        setIsVerifying(false);
      }
    };

    verifyToken();
  }, []); // Empty dependency array as we're using localStorage

  if (isVerifying) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!isValid || !currentUser) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;