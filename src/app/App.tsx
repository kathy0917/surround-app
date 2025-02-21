import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound, Home, Category, My, Root, Detail } from '../pages/index';
import { GlobalStyle } from '../shared/ui/index';
import { Step1SearchBook, Step2SelectBook } from '../widgets/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/category', element: <Category /> },
      { path: '/my', element: <My /> },
      { path: '/my/searchbook', element: <Step1SearchBook /> },
      { path: '/my/selectbook', element: <Step2SelectBook /> },
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
