import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './routes/homeLayout.tsx'
import AccountLayout from './routes/accountLayout.tsx'
import LoginLayout from './routes/loginLayout.tsx'
import MainLayout from './routes/mainLayout.tsx'
import { UserDataContextProvider } from './contexts/userData/userDataContext.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginLayout/>
  },
  {
    path:"/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <HomeLayout/>
      },
      {
        path: "account/:accountId",
        element: <AccountLayout/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDataContextProvider>
      <RouterProvider router={router}/>
    </UserDataContextProvider>
  </React.StrictMode>,
)
