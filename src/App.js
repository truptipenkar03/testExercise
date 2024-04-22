import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import './App.css';
import Percentile from './components/Percentile';
import ReactDebug from './components/ReactDebug';
import Dogs from './components/Dogs';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return <div className="container mx-auto"><RouterProvider router={router} /></div>;
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Dogs />} />
      <Route path="/debug" element={<ReactDebug />} />
      <Route path="/style" element={<Percentile />} />
    </Routes>
  );
}

