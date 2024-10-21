"use client"; // Ensures this is a Client Component

import React from 'react';
import { Typography, Box, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/system';

const cuisines = [
  { name: "Italian", icon: "/icons/italian.png" },
  { name: "Japanese", icon: "/icons/japanese.png" },
  { name: "Chinese", icon: "/icons/chinese.png" },
  { name: "Thai", icon: "/icons/thai.png" },
  { name: "French", icon: "/icons/french.png" },
  { name: "Indian", icon: "/icons/indian.png" },
  { name: "Mexican", icon: "/icons/mexican.png" }
];

// Custom styled component
const CuisineContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  backgroundColor: '#f3eaf9',
  borderRadius: '10px',
  marginBottom: '20px',
});

const HomePage = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', height: '100vh' }}>
      {/* Header Section */}
      <Typography variant="h4" component="h1" gutterBottom>
        Dish Dash
      </Typography>

      {/* Cuisine Section */}
      <Box>
        <Typography variant="h6" component="h2" gutterBottom>
          Cuisine
        </Typography>
        <CuisineContainer>
          {cuisines.map((cuisine, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Avatar
                src={cuisine.icon}
                alt={cuisine.name}
                sx={{ width: 60, height: 60, margin: '0 auto' }}
              />
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                {cuisine.name}
              </Typography>
            </Box>
          ))}
        </CuisineContainer>
      </Box>

      {/* Videos Section */}
      <Box>
        <Typography variant="h6" component="h2" gutterBottom>
          Videos
        </Typography>
        <Grid container spacing={2}>
          {/* Example of videos */}
          <Grid item xs={6}>
            <Box sx={{ height: 150, backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
              {/* Placeholder for video */}
              <Typography variant="body2" align="center" sx={{ lineHeight: '150px' }}>
                Video 1
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ height: 150, backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
              <Typography variant="body2" align="center" sx={{ lineHeight: '150px' }}>
                Video 2
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
