
import './App.scss';
import {Routes,Route, HashRouter } from 'react-router-dom'
import Layout from  './components/Layout';
import Home from './components/Home';
function App() {
  return (
  <>
  <HashRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      </Route>
  </Routes>
  </HashRouter>
  </>
  );
}
export default App
