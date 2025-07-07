import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import theme from './theme.ts';
import ClaudeExamplePage from "../pages/claude-example/page"
import DogCatPage from "../pages/dog-cat/page"
import DogCatWithPage from "../pages/dog-cat-with-state/page"

const router = createBrowserRouter([
  {
    path: "/claude-example",
    element: <ClaudeExamplePage />,
  },
  {
    path: "/dog-cat",
    element: <DogCatPage />,
  },
  {
    path: "/dog-cat-with-state",
    element: <DogCatWithPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)