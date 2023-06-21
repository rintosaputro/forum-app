/**
 * skenario test
 *
 * - asyncPopulateThreadsAndUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncPopulateThreadsAndUser } from './action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';

const fakeUsersResponse = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Title tes',
    body: 'Halo body test',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-1',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [
      'user-2',
    ],
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateThreadsAndUser thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

    const dispatch = vi.fn();

    await asyncPopulateThreadsAndUser()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator([
      {
        ...fakeThreadsResponse[0],
        ownerName: fakeUsersResponse[0].name,
        ownerAvatar: fakeUsersResponse[0].avatar,
      },
    ]));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
