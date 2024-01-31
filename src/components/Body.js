import React from "react";
import Login from "./Login/Login";
import Browse from "./Browse";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
