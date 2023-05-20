import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import { asyncPopulateThreadsAndUser } from '../states/shared/action';
import { asyncToggleLikeThread, asyncToggleNeutralThread, asyncToggleUnLikeThread } from '../states/threads/action';
import CategoryList from '../components/CategoryList';

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [keyCategory, setKeyCategory] = useState('');

  const { threads } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreadsAndUser());
  }, [dispatch]);

  useEffect(() => {
    if (threads.length !== 0) {
      setCategories(threads.map((thread) => thread.category));
    }
  }, [threads]);

  const onLike = ({ id, isActive }) => {
    if (isActive) {
      return dispatch(asyncToggleNeutralThread(id));
    }
    return dispatch(asyncToggleLikeThread(id));
  };

  const onUnLike = ({ id, isActive }) => {
    if (isActive) {
      return dispatch(asyncToggleNeutralThread(id));
    }
    return dispatch(asyncToggleUnLikeThread(id));
  };

  const onCategory = ({ category, isActive }) => {
    if (isActive) {
      return setKeyCategory('');
    }
    return setKeyCategory(category);
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
          <CategoryList categories={categories} onCategory={onCategory} />
          <ThreadList
            threads={keyCategory
              ? threads?.filter((thread) => thread.category === keyCategory)
              : threads}
            onLike={onLike}
            onUnLike={onUnLike}
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
