import Login from './pages/login';
import Menu from './pages/menu';
import Create from './pages/create';
import Find from './pages/find';
import Navbar from './components/navbar';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/create",
    element: 
      <>
        <Navbar/>
        <Create/>
      </>,
  },
  {
    path: "/find",
    element: 
      <>
        <Navbar/>
        <Find/>
      </>,
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
