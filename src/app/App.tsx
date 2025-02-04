import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from '../pages/index';
import { Home } from '../pages/index';
import { Category } from '../pages/index';
import { My } from '../pages/index';
import { Root } from '../pages/index';
import { Detail } from '../pages/index';
import { GlobalStyle } from '../shared/segments/ui/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/category', element: <Category /> },
      { path: '/my', element: <My /> },
      { path: '/detail/:id', element: <Detail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
