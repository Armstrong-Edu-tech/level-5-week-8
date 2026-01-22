import React from 'react';
import useFetch from './useFetch';
import './App.css';

function UserList() {
 const {data,loading,error,refetch}=useFetch(`https://dummyjson.com/users`);
  if (loading) return <p>Loading users...</p>;
  if (error) return (
    <>
      <p>Error: {error}</p>
      <button onClick={refetch}>Try Again</button>
    </>
  );

  return (
    <div>
      <h2>User List</h2>
      <button onClick={refetch}>Refresh</button>
      <ul>
  {data && data.users && data.users.map(user => (
    <li key={user.id}>{user.firstName}</li>
  ))}
</ul>

    </div>
  );
}

export default UserList;

