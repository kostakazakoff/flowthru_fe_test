import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Path from './routePaths';
import Layout from './components/shared/Layout';
import Home from './components/home/Home';
import Register from './components/auth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path={Path.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Path.REGISTER} element={<Register />} />
          <Route path={Path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
