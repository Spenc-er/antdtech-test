import { Spinner } from '@/components/ui/spinner';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import * as React from 'react'; 

// Dummy Book data
type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
};

const mockBooks: Book[] = Array.from({ length: 42 }, (_, i) => ({
  id: String(i + 1),
  title: `Book ${i + 1}`,
  author: `Author ${i + 1}`,
  year: 2000 + (i % 20),
}));
export const rootRoute = createRootRoute({
  component: () => (
    <>
     <Spinner></Spinner>
    </>
  )
}); 