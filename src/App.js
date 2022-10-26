
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';


function App ()
{
  const router = createBrowserRouter( [
    
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/Topics',
          loader: () => fetch( 'https://openapi.programming-hero.com/api/quiz/${1}' ),
          element:<Topics></Topics>
        },

        {
          path: '/Statistics',
          element:<Statistics> </Statistics>         

        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },

      ]
    }
  ])
  return (
    <div className="App">

<RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
