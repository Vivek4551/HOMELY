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
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
// import GrcPage from "./components/GrcPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// chunking -> divide the code into small chunks
// code splitting -> divide the code into small chunks and load them on demand
// lazy loading -> load the code on demand
// dynamic bundling -> divide the code into small chunks and load them on demand

const GrcPage = lazy(() => import("./components/GroceryPage"));

const AppLayout = () => {
  const [userName, setUserName] = useState(" ");

  // Authetnication
  useEffect(() => {
    // make an api call and send userName and password
    const data = {
      name: "Vivek Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/*  Default  */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* Overriding the default value */}
        {/* here i want that if we want to chnage the value thorugh user name box in body component 
    the it should render that value os user name in every component where the usercontext 
    is used in real time, One feature is that along with value we can also pass setUsername 
    in Context so that we can able to acces it in body component  */}
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <GrcPage />
          </Suspense>
        ),
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
