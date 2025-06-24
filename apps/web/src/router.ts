import { createRouter, createRoute, Router } from '@tanstack/react-router';
import { rootRoute } from './routes/root';

export const router = new Router({
  routeTree: rootRoute,
}); 