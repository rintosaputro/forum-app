/**
* test scenario for threadsReducer
*
* - leaderboardsReducer function
*  - should return the initial state when given by UNKNOWN action
*  - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
*
*/

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by UNKNOWN action', () => {
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the user when given by RECEIVE_LEADERBOARDS action', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
        ],
      },
    };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
