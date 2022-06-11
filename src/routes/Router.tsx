import { useState } from 'react';
import { AdminRoutes } from './AdminRoutes';
import { UserRoutes } from './UserRoutes';

export const Router = () => {
  // !!INFO , we will take user's role from auth context
  const [userRole] = useState('admin');

  // return userRole === 'admin' ? <AdminRoutes /> : <UserRoutes />;
  return (
    <>
      <AdminRoutes />
      {/* <UserRoutes /> */}
    </>
  );
};
