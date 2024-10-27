// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PeoplePage from './components/people/people';
// import SignUp from './components/signin/signup';
import SignIn from './components/signin/SignIn';
import { AuthProvider } from './components/authContext';
import ProtectedRoute from './components/protectedRoute';
import { Home } from '@mui/icons-material';
import Test from './components/test/test';
import ContinuousAssessment from './components/continuousassessment';

function App() {
  return (


    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/continuousassessment" element={<ContinuousAssessment ></ContinuousAssessment>} />
          <Route
            path="/people"
            element={
              <ProtectedRoute>
                <PeoplePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/test"
            element={<Test></Test>}

          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;






