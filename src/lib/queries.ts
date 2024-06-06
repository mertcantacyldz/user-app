import { User, Post, Todo, Album} from '../types/types';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers(): Promise<User[]> {
   
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export async function fetchUser(userId: string): Promise<User> {
 
  const res = await fetch(`${BASE_URL}/users/${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  return res.json();
}

export async function fetchUserPosts(userId: string): Promise<Post[]> {
   
  const res = await fetch(`${BASE_URL}/users/${userId}/posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export async function fetchUserTodos(userId: string): Promise<Todo[]> {

  const res = await fetch(`${BASE_URL}/users/${userId}/todos`);
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }
  return res.json();
}

export async function fetchUserAlbums(userId: string): Promise<Album[]> {
  const res = await fetch(`${BASE_URL}/users/${userId}/albums`);
  if (!res.ok) {
    throw new Error('Failed to fetch albums');
  }
  return res.json();
}

