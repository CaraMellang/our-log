import { createTestSlice, TestState, initialTestState } from './test';
import { createUserSlice, UserState, initialUserState } from './user';
import create from 'zustand';
import { combine, devtools } from 'zustand/middleware';

type StoreState = UserState & TestState;

export const useStore = create(
  devtools(
    combine({ user: { name: 'zzzz' } }, set => ({
      update: (tlqkf: string) =>
        set(state => ({ user: { ...state.user, name: '아 ㅋㅋ' + tlqkf } })),
      hi: { name: '이집은 state에 액션을 넣나봐요?' },
    }))
  )
);
