import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login';
import PatientForm from './Pages/PatientForm';
import Feedback from './Pages/Feedback';
import Home from './Pages/Home';
import Contactform from './Pages/Contactform';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "#4aed88",
            },
          },
          error: {
            duration: 3000,
            theme: {
              primary: "#f87171",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-form" element={<PatientForm />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contactform />} />
      </Routes>
    </div>
  );
}

export default App