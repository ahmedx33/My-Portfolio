import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./router.tsx"
import "./index.css"
import Loading from './components/ui/Loading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <Loading loaderName='Welcome!!'/>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
