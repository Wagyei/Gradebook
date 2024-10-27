// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};