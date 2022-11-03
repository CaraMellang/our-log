import create from 'zustand/react';

export interface UserState {
  user: {
    username: string;
  };
  updateUser: (username: string) => void;
}

export const useStoreUser = create<UserState>(set => ({
  user: { username: 'no-name' },
  updateUser: username =>
    set(state => ({ user: { ...state.user, username: 'ㅋㅋ' + username } })),
}));
