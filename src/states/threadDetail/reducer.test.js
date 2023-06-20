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
});
