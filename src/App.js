
import './App.css';
import { Container } from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
          </Routes>
        </Container>
      </main>
      <Footer />
   </BrowserRouter>
  );
}

export default App;
