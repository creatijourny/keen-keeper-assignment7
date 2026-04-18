import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layout/RootLayout'
import Homepage from './homepage/Homepage'
import Timeline from './components/timeline/Timeline'
import Stats from './components/stats/Stats'
import YourFriends from './components/Homepage/YourFriends'
import FriendDetails from './pages/FriendDetails'



const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          path: "/",
          element: <Homepage />,          
        },
        {
          path: "/yourfriends",
          element: <YourFriends />,          
        },
        {
          path: "/friendDetails/:id",
          Component: FriendDetails,
          loader: () => fetch("/friends.json"),
        },        
        {
          path: "/timeline",
          element: <Timeline />,
        },
        {
          path: "/stats",
          element: <Stats />,
        }

      ]
    },


  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
