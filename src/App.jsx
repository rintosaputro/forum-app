import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/preload/action';

function App() {
  const { authUser = null, isPreload = false } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return (
      <div>Loading...</div>
    );
  }
  if (!authUser) {
    return (
      <>
        <LoadingBar className="loading-bar" />
        <div className="App">
          <Routes>
            <Route path="*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </>
    );
  }
  return (
    <>
      <LoadingBar className="loading-bar" />
      <div className="App">
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer onSignOut={onSignout} />
      </div>
    </>
  );
}

export default App;
