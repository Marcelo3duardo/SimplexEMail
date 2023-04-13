import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import User from './Pages/User'	

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/User" element={<User/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
