import create, { SetState, StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';
interface User {
  username: string;
  s3Files?: [{ fileName: string; path: string }];
}

export interface UserState {
  user: User;
  updateUser: (username: string) => void;
}

export const initialUserState: User = {
  username: 'no-name',
};

// const store = (
//   set: (
//     partial:
//       | UserState
//       | Partial<UserState>
//       | ((state: UserState) => UserState | Partial<UserState>),
//     replace?: boolean | undefined
//   ) => void
// ): UserState => ({
//   user: initialState,
//   updateUser: username =>
//     set(state => ({ user: { ...state.user, username: 'ㅋㅋ' + username } })),
// });

// export const useStoreUser = create(
//   process.env.NODE_ENV !== 'production' ? devtools(store) : store
// );

export const createUserSlice = (
  set: StoreApi<UserState>['setState'],
  get: StoreApi<UserState>['getState'],
): UserState => ({
  user: initialUserState,
  updateUser: (username) => set((state) => ({ user: { ...state.user, username: 'ㅋㅋ' + username } })),
});
