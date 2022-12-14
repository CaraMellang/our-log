import { createTestSlice, TestState, initialTestState } from './test';
import { createUserSlice, UserState, initialUserState } from './user';
import create from 'zustand';
import { combine, devtools } from 'zustand/middleware';

type StoreState = UserState & TestState;

const initialState = {
  user: {
    // ...initialUserState,
  },
  test: {
    ...initialTestState,
  },
};

export const useStore = create(
  devtools(
    combine(initialState, (set) => ({
      update: (gg: string) => set((state) => ({ user: { ...state.user, name: '아 ㅋㅋ' + gg } })),
      hi: { name: '이집은 state에 액션을 넣나봐요?' },
      reset: () => set(initialState),
    })),
  ),
);

export const hydrateStore = (initialState: any) => {
  if (initialState) useStore.setState(initialState);
};
