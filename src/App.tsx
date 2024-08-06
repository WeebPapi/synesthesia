import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </div>
  );
}

export default App;
