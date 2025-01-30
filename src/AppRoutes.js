import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Fieldspage from './Pages/Fieldspage';
import FieldDetailpage from './Pages/FieldDetailpage';
import ChatPage from './Pages/ChatPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/fields" element={<Fieldspage />} />
    <Route path="/field/:fieldId" element={<FieldDetailpage />} />
    <Route path="/chat" element={<ChatPage />} />
  </Routes>
);

export default AppRoutes;