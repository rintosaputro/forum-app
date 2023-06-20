/**
* test scenario for threadDetailReducer
*
* - threadDetailReducer function
*  - should return the initial state when given by unknown action
*  - should return the thread detail payload when given by RECEIVE_THREAD_DETAIL action
*  - should return null when given by CLEAR_THREAD_DETAIL action
*  - should return the thread detail with the toggled like thread detail when given by TOGGLE_LIKE_THREAD_DETAIL action
*  - should return the thread detail with the toggled like thread detail when given by TOGGLE_UNLIKE_THREAD_DETAIL action
*  - should return the thread detail with the toggled neutral thread detail when given by TOGGLE_NEUTRAL_THREAD_DETAIL action
*  - should return the thread detail with the new comment in thread detail when given by CREATE_THREAD action
*  - should return the thread detail with the toggled like comment in thread detail when given by TOGGLE_LIKE_COMMENT action
*  - should return the thread detail with the toggled unlike comment in thread detail when given by TOGGLE_UNLIKE_COMMENT action
*  - should return the thread detail with the toggled neutral comment in thread detail when given by TOGGLE_NEUTRAL_COMMENT action
*
*/

import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toBe(null);
  });

  it('should return the thread detail payload when given by RECEIVE_THREAD_DETAIL action', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Halo! ',
          body: 'Bagaimana kabarmu? Semoga baik-baik saja ya.Sekali lagi saya ucapkan selamat datang semuanya!',
          createdAt: '2023-05-29T07:54:35.746Z',
          owner: {
            id: 'user-1',
            name: 'Dicoding',
            avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
          },
          category: 'perkenalan',
          comments: [
            {
              id: 'comment-1',
              content: 'Halo!<br>Perkanalkan, nama saya Dimas.',
              createdAt: '2023-05-29T07:59:04.689Z',
              owner: {
                id: 'user-2',
                name: 'Dimas Saputra',
                avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
          upVotesBy: [
            'user-3',
          ],
          downVotesBy: [],
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    const initialState = [{
      id: 'thread-1',
      title: 'Halo! ',
      body: 'Bagaimana kabarmu? Semoga baik-baik saja ya.Sekali lagi saya ucapkan selamat datang semuanya!',
      createdAt: '2023-05-29T07:54:35.746Z',
      owner: {
        id: 'user-1',
        name: 'Dicoding',
        avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
      },
      category: 'perkenalan',
      comments: [],
      upVotesBy: [
        'user-3',
      ],
      downVotesBy: [],
    }];
    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toBe(null);
  });
});
