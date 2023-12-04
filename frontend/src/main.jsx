import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import store from "./store/store.jsx";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import AccountType from "./components/AccountType.jsx";
import PersonInfo from "./components/PersonInfo.jsx";
import PersonDetails from "./components/PersonDetails.jsx";
import SupportType from "./components/SupportType.jsx";
import WindUpPage from "./components/WindUpPage.jsx";
import RootLayout from "./components/RootLayout.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AccountType />,
      },
      {
        path: "person-info",
        element: <PersonInfo />,
      },
      {
        path: "person-details",
        element: <PersonDetails />,
      },
      {
        path: "support",
        element: <SupportType />,
      },
      {
        path: "what-next",
        element: <WindUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
