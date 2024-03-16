/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const App = lazy(() => import("./App.tsx"))
const RootLayout = lazy(() => import("./components/header/Header.tsx"))
const Projects = lazy(() => import("./components/projects/Projects.tsx"))

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                element: <Suspense><App /></Suspense>,
                path: "/"
            },
            {
                element: <Suspense><Projects /></Suspense>,
                path: "/projects"
            }
        ]
    }
])
