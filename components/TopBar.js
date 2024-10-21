"use client"; // This ensures that the component can use client-side interactivity

import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = () => {
  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '15px' }}>
      <AccountCircleIcon
        sx={{ fontSize: '2rem', cursor: 'pointer' }}
        onClick={() => alert('User profile clicked')} // Replace with your own logic
      />
      <SettingsIcon
        sx={{ fontSize: '2rem', cursor: 'pointer' }}
        onClick={() => alert('Settings clicked')} // Replace with your own logic
      />
    </div>
  );
};

export default TopBar;
