import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Loading from './loading/Loading.jsx'
import { BrowserRouter } from 'react-router-dom'
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)
