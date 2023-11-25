import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import GrcPage from "./components/GrcPage";

// chunking -> divide the code into small chunks
// code splitting -> divide the code into small chunks and load them on demand
// lazy loading -> load the code on demand
// dynamic bundling -> divide the code into small chunks and load them on demand

const GrcPage = lazy(() => import("./components/GroceryPage"));


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// routing configuration
// configuration => some info that will define that what will happen on specific route
// createBrowserRouter => it takes an array of configuration and configuration are nothing just objects that will decide the route
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/grcPage",
        element: <Suspense fallback={<div>Loading...</div>}><GrcPage /></Suspense>,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
