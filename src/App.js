import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import User from './Pages/User'	


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
