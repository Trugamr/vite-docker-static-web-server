import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './root'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
