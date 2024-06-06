import React from 'react';
import { Card, CardContent, Typography, Avatar, Button, Box, Container, Alert } from '@mui/material';
import { User } from '../types/types';
import UserTabs from '../components/UserTabs';
import { stringAvatar } from '../utils/avatarUtils'; //avatar için renk ve harfleri gösterme fonksiyonları
import { FaHome } from "react-icons/fa";
import CardHeader from '@mui/material/Card';

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
   
     <>
     { user ? (
       <Card sx={{ '@media (min-width: 1536px)': { minWidth: '1150px' } }} className='  p-4' >
        
       
       <CardContent className=' '>
         
           <Typography variant="h3">{user.name}</Typography>
           <Typography variant="body1">Email: {user.email}</Typography>
           <Typography variant="body1">Phone: {user.phone}</Typography>
           <Typography variant="body1">Website: {user.website}</Typography>
           <Typography variant="body1">Company: {user.company.name}</Typography>
           <Typography variant="body1">Address: {user.address.street}, {user.address.city}</Typography>
         
  
       </CardContent>

       <UserTabs userId={user.id} />
       <div className='w-full flex justify-end p-3 mt-2'>
         <Button size='large' variant="contained" endIcon={<FaHome />} href={`/`} >
           Go Home Page
         </Button>
       </div>
     </Card>
     ) :( <Alert severity="error">User not found</Alert>)

     }
     </>
  
  );
};

export default UserDetails;