import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import theme from './theme.ts';

const router = createBrowserRouter([
  {
    element: <div></div>,
    children: [
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)