import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const { authUser } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onSignout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (!authUser) {
    return (
      <div className="App">
        <Routes>
          <Route path="*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer onSignOut={onSignout} />
      </div>
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer onSignOut={onSignout} />
    </div>
  );
}

export default App;
