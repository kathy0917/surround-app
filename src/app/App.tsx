import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import { Home } from '../pages/Home/index';
import Category from '../pages/Category';
import My from '../pages/My';
import Root from '../pages/Root';
import Detail from '../pages/Detail';
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
