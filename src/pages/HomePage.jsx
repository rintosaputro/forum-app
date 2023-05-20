import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonCategory from '../components/ButtonCategory';
import ThreadList from '../components/ThreadList';
import { asyncPopulateThreadsAndUser } from '../states/shared/action';
import { asyncToggleLikeThread, asyncToggleNeutralThread } from '../states/threads/action';

function HomePage() {
  const { threads } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreadsAndUser());
  }, [dispatch]);

  const onLike = ({ id, isActive }) => {
    if (isActive) {
      return dispatch(asyncToggleNeutralThread(id));
    }
    return dispatch(asyncToggleLikeThread(id));
  };

  const onUnLike = (id) => {
    alert(id);
  };

  return (
    <section className="home-page">
      <div className="home-overlay">
        <div className={threads.length === 0 ? 'empty-content' : ''}>
          <header className="home-header">
            <h1>
              <span className="text-primary">Forum</span>
              {' '}
              App
            </h1>
          </header>
          <h5>Popular Category</h5>
          <div>
            <ButtonCategory>Makan</ButtonCategory>
          </div>
          <ThreadList threads={threads} onLike={onLike} onUnLike={onUnLike} />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
