import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import FirstComponent from './components/FirstComponent.jsx';
import Header from './components/Header.jsx';
import SecondComponent from './components/SecondComponent.jsx';
import ThirdComponent from './components/ThirdComponent.jsx';
import './index.css';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/component-1',
        element: <FirstComponent />,
      },
      {
        path: '/component-2',
        element: <SecondComponent />,
      },
      {
        path: '/component-3',
        element: <ThirdComponent />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
