"use client"
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, CircularProgress } from '@mui/material';
import { Post, Todo, Album } from '../types/types';
import { fetchUserPosts, fetchUserTodos, fetchUserAlbums } from '../lib/queries';
import Tables from "./Tables"

interface UserTabsProps {
  userId: number;
}

interface UserData {
  posts: Post[];
  todos: Todo[];
  albums: Album[];
}

const UserTabs: React.FC<UserTabsProps> = ({ userId }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [ x,setX] =useState()


  

  // fetch işlemleri
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, todosData, albumsData] = await Promise.all([
          fetchUserPosts(userId.toString()),
          fetchUserTodos(userId.toString()),
          fetchUserAlbums(userId.toString()),
        ]);

        setUserData({ posts: postsData, todos: todosData, albums: albumsData });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  console.log( " todo", userData?.todos)

  if (loading) return <CircularProgress />;

  const { posts, todos, albums } = userData || { posts: [], todos: [], albums: [] };

  return (
    <Box>
      <Tabs  value={tabIndex} onChange={(event, newValue) => setTabIndex(newValue)}>
        <Tab sx={{fontWeight:"900"}} label="Posts" />
        <Tab sx={{fontWeight:"900"}} label="Todos" />
        <Tab  sx={{fontWeight:"900"}} label="Albums" />
      </Tabs>
      {tabIndex === 0 && userData && <Tables tabs={userData.posts} name={"Post"}></Tables>}
      {tabIndex === 1 && userData && <Tables tabs={userData.todos} name={"Todo"}></Tables> }
      {tabIndex === 2 && userData && <Tables tabs={userData.albums} name={"Album"}></Tables> }
    </Box>
  );
};

export default UserTabs;
