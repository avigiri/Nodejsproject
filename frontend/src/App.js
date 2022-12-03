import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Private from './components/Private';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<h1> product listing component</h1>} />
            <Route path="/add" element={<h1> product listing product</h1>} />
            <Route path="/update" element={<h1> product listing product</h1>} />
            <Route path="/logout" element={<h1> product page logout </h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <h1>


        </h1>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
