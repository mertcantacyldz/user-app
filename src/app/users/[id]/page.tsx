import React from 'react';
import { User } from '../../../types/types';
import UserDetails from '../../../components/UserDetails';
import { Container} from '@mui/material';
import { fetchUser } from '../../../lib/queries';

interface UserPageProps {
  params: {
    id: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user: User = await fetchUser(params.id);

  return (

    
    <Container  sx={ {display:"flex",justifyContent:"center",  marginTop:"3%" }}>
      
      
      <UserDetails  user={user} />
      
      
    </Container>
  );
};

export default UserPage;
