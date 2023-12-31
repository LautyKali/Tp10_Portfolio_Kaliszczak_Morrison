import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/js/Layout'
import Home from './pages/js/Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
