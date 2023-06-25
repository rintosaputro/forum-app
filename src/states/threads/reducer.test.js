/**
* test scenario for threadsReducer
*
* - threadsReducer function
*  - should return the initial state when given by UNKNOWN action
*  - should return the threads when given by RECEIVE_THREADS action
*  - should return the threads with the new thread when given by CREATE_THREAD action
*  - should return the threads with the toggled like thread when given by TOGGLE_LIKE_THREAD action
*  - should return the threads with the toggled unlike thread when given by TOGGLE_UNLIKE_THREAD action
*  - should return the threads with the toggled neutral thread when given by TOGGLE_NEUTRAL_THREAD action
*
*/

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-2',
            title: 'React Redux',
            body: 'Belajar React redux',
            category: 'redux',
            createdAt: '2023-06-20T03:26:03.333Z',
            ownerId: 'owner-id-2',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by CREATE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Next js',
        body: 'Server side rendering di dalam next js',
        category: 'ssr',
        createdAt: '2023-06-20T03:26:03.333Z',
        ownerId: 'owner-id-1',
        totalComments: 1,
        upVotesBy: ['voter-1'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'React Redux',
          body: 'Belajar React redux',
          category: 'redux',
          createdAt: '2023-06-20T03:26:03.333Z',
          ownerId: 'owner-id-2',
          totalComments: 0,
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the toggled like thread when given by TOGGLE_LIKE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Next js',
        body: 'Server side rendering di dalam next js',
        category: 'ssr',
        createdAt: '2023-06-20T03:26:03.333Z',
        ownerId: 'user-1',
        totalComments: 1,
        upVotesBy: ['user-1'],
        downVotesBy: ['user-2'],
      },
    ];
    const action = {
      type: 'TOGGLE_LIKE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-2',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [...initialState[0].upVotesBy, action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the toggled unlike thread when given by TOGGLE_UNLIKE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Next js',
        body: 'Server side rendering di dalam next js',
        category: 'ssr',
        createdAt: '2023-06-20T03:26:03.333Z',
        ownerId: 'user-1',
        totalComments: 1,
        upVotesBy: ['user-1'],
        downVotesBy: ['user-2'],
      },
    ];
    const action = {
      type: 'TOGGLE_UNLIKE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [...initialState[0].downVotesBy, action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled neutral thread when given by TOGGLE_NEUTRAL_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Next js',
        body: 'Server side rendering di dalam next js',
        category: 'ssr',
        createdAt: '2023-06-20T03:26:03.333Z',
        ownerId: 'user-1',
        totalComments: 1,
        upVotesBy: ['user-1'],
        downVotesBy: ['user-2'],
      },
    ];
    // action for neutral like
    const action = {
      type: 'TOGGLE_NEUTRAL_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };
    // action for neutral unlike
    const action2 = {
      type: 'TOGGLE_NEUTRAL_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-2',
      },
    };

    // next state for neutral like
    const nextState = threadsReducer(initialState, action);
    // expect for neutral like
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
      },
    ]);

    // next state for neutral unlike
    const nextState2 = threadsReducer(initialState, action2);
    // expect for neutral unlike
    expect(nextState2).toEqual([
      {
        ...initialState[0],
        downVotesBy: [],
      },
    ]);
  });
});
