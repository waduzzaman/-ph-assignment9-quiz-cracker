
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import ReactQuiz from './components/ReactQuiz/ReactQuiz';
import Main from './layout/Main';
import JavaScript from './components/JavaScript/JavaScript';
import CSS from './components/CSS/CSS';
import Git from './components/Git/Git';


function App ()
{
  const router = createBrowserRouter( [    

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },    
     
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>
        },     

        {
          path:'/react',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/1'),
          element:<ReactQuiz></ReactQuiz>,
        },

        {
          path:'/javascript',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/2'),
          element:<JavaScript></JavaScript>,
        },

        {
          path:'/css',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/3'),
          element:<CSS></CSS>,
        },

        {
          path:'/git',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/4'),
          element:<Git></Git>,
        },

        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics> </Statistics>,

        },
        {
          path: '/blog',
          
          element: <Blog></Blog>,
        },
       
        
      ]
    }
  ] )
  return (
    <div className="App">

      <RouterProvider router={ router }></RouterProvider>

    </div>
  );
}

export default App;
