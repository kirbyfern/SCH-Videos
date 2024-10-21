"use client"; // Ensures this is a Client Component

import React from 'react';
import { BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import GroupIcon from '@mui/icons-material/Group';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleIcon from '@mui/icons-material/AddCircle'; // For the plus icon
import { useRouter } from 'next/navigation'; // New useRouter from next/navigation

const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // New useRouter from next/navigation

  // Function to handle navigation
  const handleNavigation = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/home'); // Navigate to /home
        break;
      case 1:
        router.push('/subscribe'); // Navigate to /subscribe
        break;
      case 2:
        router.push('/community'); // Navigate to /community
        break;
      case 3:
        router.push('/history'); // Navigate to /history
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ width: '80px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3eaf9' }}>

      {/* Plus Icon */}
      <BottomNavigationAction
        icon={<AddCircleIcon />}
        onClick={() => alert('Add new item')} // Placeholder for add functionality
        sx={{ marginTop: '20px', marginBottom: '40px', fontSize: '2rem' }}
      />

      {/* Vertical Navigation */}
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={() => handleNavigation(0)}
        sx={{ marginBottom: '20px' }}
      />
      <BottomNavigationAction
        label="Subscribe"
        icon={<SubscriptionsIcon />}
        onClick={() => handleNavigation(1)}
        sx={{ marginBottom: '20px' }}
      />
      <BottomNavigationAction
        label="Community"
        icon={<GroupIcon />}
        onClick={() => handleNavigation(2)}
        sx={{ marginBottom: '20px' }}
      />
      <BottomNavigationAction
        label="History"
        icon={<HistoryIcon />}
        onClick={() => handleNavigation(3)}
        sx={{ marginBottom: '20px' }}
      />
    </div>
  );
};

export default Navbar;
