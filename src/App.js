import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewRequest from './pages/NewRequest'
import TrackRequest from './pages/TrackRequest'
import TrackRequestItem from './pages/TrackRequestItem'
import Settings from './pages/Settings'
import Notifications from './pages/Notifications'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/newrequest",
    element: <NewRequest />,
  },
  {
    path: "/trackrequest",
    element: <TrackRequest />,
  },
  {
    path: "/trackrequestitem",
    element: <TrackRequestItem />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
