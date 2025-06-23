import { createRootRoute, Outlet } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <h1>Welcome to Vite + React + TanStack Router!</h1>
      <Outlet />
    </>
  ),
}); 