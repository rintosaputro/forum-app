/**
* test scenario for threadDetailReducer
*
* - threadDetailReducer function
*  - should return the initial state when given by UNKNOWN action
*  - should return the thread detail payload when given by RECEIVE_THREAD_DETAIL action
*  - should return null when given by CLEAR_THREAD_DETAIL action
*  - should return the thread detail with the toggled like thread detail when given by TOGGLE_LIKE_THREAD_DETAIL action
*  - should return the thread detail with the toggled like thread detail when given by TOGGLE_UNLIKE_THREAD_DETAIL action
*  - should return the thread detail with the toggled neutral thread detail when given by TOGGLE_NEUTRAL_THREAD_DETAIL action
*  - should return the thread detail with the new comment in thread detail when given by CREATE_COMMENT action
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
    const initialState = null;
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
          upVotesBy: ['user-3'],
          downVotesBy: [],
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    const initialState = {
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
      upVotesBy: ['user-3'],
      downVotesBy: [],
    };
    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toBe(null);
  });

  it('should return the thread detail with the toggled like thread detail when given by TOGGLE_LIKE_THREAD_DETAIL action', () => {
    const initialState = {
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
      upVotesBy: ['user-3'],
      downVotesBy: ['user-test'],
    };
    const action = {
      type: 'TOGGLE_LIKE_THREAD_DETAIL',
      payload: {
        userId: 'user-test',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [...initialState.upVotesBy, action.payload.userId],
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the toggled like thread detail when given by TOGGLE_UNLIKE_THREAD_DETAIL action', () => {
    const initialState = {
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
      upVotesBy: ['user-test'],
      downVotesBy: ['user-3'],
    };
    const action = {
      type: 'TOGGLE_UNLIKE_THREAD_DETAIL',
      payload: {
        userId: 'user-test',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [...initialState.downVotesBy, action.payload.userId],
    });
  });

  it('should return the thread detail with the toggled neutral thread detail when given by TOGGLE_NEUTRAL_THREAD_DETAIL action', () => {
    const initialState = {
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
      upVotesBy: ['user-test'],
      downVotesBy: ['user-test2'],
    };
    // action for neutral like thread
    const action = {
      type: 'TOGGLE_NEUTRAL_THREAD_DETAIL',
      payload: {
        userId: 'user-test',
      },
    };
    // action for neutral unlike thread
    const action2 = {
      type: 'TOGGLE_NEUTRAL_THREAD_DETAIL',
      payload: {
        userId: 'user-test2',
      },
    };

    // next state for neutral like thread
    const nextState = threadDetailReducer(initialState, action);
    // expect for neutral like thread
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
    });

    // next state for neutral like thread
    const nextState2 = threadDetailReducer(initialState, action2);
    // expect for neutral like thread
    expect(nextState2).toEqual({
      ...initialState,
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the new comment in thread detail when given by CREATE_COMMENT action', () => {
    const initialState = {
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
      upVotesBy: ['user-test'],
      downVotesBy: ['user-test2'],
    };
    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment],
    });
  });

  it('should return the thread detail with the toggled like comment in thread detail when given by TOGGLE_LIKE_COMMENT action', () => {
    const initialState = {
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
          downVotesBy: ['user-test'],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: 'TOGGLE_LIKE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-test',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with the toggled unlike comment in thread detail when given by TOGGLE_UNLIKE_COMMENT action', () => {
    const initialState = {
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
          upVotesBy: ['user-test'],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: 'TOGGLE_UNLIKE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-test',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the thread detail with the toggled neutral comment in thread detail when given by TOGGLE_NEUTRAL_COMMENT action', () => {
    const initialState = {
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
          upVotesBy: ['user-test'],
          downVotesBy: ['user-test2'],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    // action for neutral like comment
    const action = {
      type: 'TOGGLE_NEUTRAL_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-test',
      },
    };
    // action for neutral unlike comment
    const action2 = {
      type: 'TOGGLE_NEUTRAL_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'user-test2',
      },
    };

    // next state for neutral like comment
    const nextState = threadDetailReducer(initialState, action);

    // expect for neutral like comment
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
        },
      ],
    });

    // next state for neutral unlike comment
    const nextState2 = threadDetailReducer(initialState, action2);

    // expect for neutral unlike comment
    expect(nextState2).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [],
        },
      ],
    });
  });
});
