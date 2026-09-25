import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Practice = lazy(() => import('./pages/Practice'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const Appointments = lazy(() => import('./pages/Appointments'))
const Imprint = lazy(() => import('./pages/Imprint'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Seite wird geladen">
      <span />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="praxis" element={<Practice />} />
            <Route path="leistungen" element={<Services />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="termine" element={<Appointments />} />
            <Route path="impressum" element={<Imprint />} />
            <Route path="datenschutz" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
