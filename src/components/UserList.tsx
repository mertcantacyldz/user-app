"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button,  Grid, Avatar,TextField, Alert } from '@mui/material';
import { User } from '../types/types';
import { BiSolidUserDetail } from "react-icons/bi";
import {  stringAvatar } from '../utils/avatarUtils'; //avatar için renk ve harfleri gösterme fonksiyonları
interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {

  
  const [searchTerm, setSearchTerm] = useState<string>('');

  // inputdan veriyi alıyoruz
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSearchTerm(event.target.value);
  };
  
// filtreleme işlemi
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
 <>
   <TextField
        label="Search users"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        style={{ marginBottom: '20px' }}
      />

{filteredUsers.length === 0 ?(<Alert severity="warning">User not found</Alert>) :<Grid container spacing={4} >
      {filteredUsers.map(user => (
        <Grid item xs={12} sm={6} lg={4} xl={3} key={user.id}>
        
          <Card sx={{ minHeight: 150 }}>
            <CardContent sx={{ minHeight: 125 }}>
            <Avatar className='mb-2' {...stringAvatar(user.name)} />
              <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
          
                {user.email}
              </Typography>
            </CardContent>
            
           <div className='w-full flex justify-end p-3'>
           <Button variant="contained" endIcon={<BiSolidUserDetail />} href={`/users/${user.id}`} >
              Detail
            </Button>
           </div>
          </Card>
         
        </Grid>
      ))}
    </Grid>}
 </>
    



  );
};

export default UserList;