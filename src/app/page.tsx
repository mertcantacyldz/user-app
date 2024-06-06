
import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { User } from '../types/types';
import { Container, Box, Typography, TextField,CircularProgress } from '@mui/material';
import { fetchUsers } from '../lib/queries';

const Home = async () => {
  
  const users: User[] = await fetchUsers();
  return (
    <Container>

       <Box className="flex justify-center items-center m-7">
        <Typography variant="h2" color="#ffff">
          User -APP
        </Typography>
      </Box>
   
      {users ? <UserList users={users} />:<CircularProgress /> }
    </Container>
  );
};

export default Home;