import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import NewsDetail from "../components/NewsDetail"
import NewsList from "../components/NewsList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <NewsList />,
      },
      {
        path: "news/:slug",
        element: <NewsDetail />,
      },
    ],
  },
  {
    path: "/login",
  },
  {
    path: "/register",
  },
])

export default router
