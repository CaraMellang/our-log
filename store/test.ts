import create from 'zustand';
import { devtools } from 'zustand/middleware';
interface Test {
  testMessage: string;
}

export interface TestState {
  test: Test;
  updateTest: (testString: string) => void;
}

export const initialTestState: Test = {
  testMessage: 'no-name',
};

// const store = (
//   set: (
//     partial:
//       | TestState
//       | Partial<TestState>
//       | ((state: TestState) => TestState | Partial<TestState>),
//     replace?: boolean | undefined
//   ) => void
// ): TestState => ({
//   test: initialState,
//   updateTest: testString =>
//     set(state => ({
//       test: { ...state.test, testMessage: 'ㅋㅋ' + testString },
//     })),
// });

// export const useStoreTest = create(
//   process.env.NODE_ENV !== 'production' ? devtools(store) : store
// );

export const createTestSlice = (
  set: (
    partial:
      | TestState
      | Partial<TestState>
      | ((state: TestState) => TestState | Partial<TestState>),
    replace?: boolean | undefined,
    ...any: any
  ) => void
): TestState => ({
  test: initialTestState,
  updateTest: testMessage =>
    set(state => ({ test: { ...state.test, testMessage: 'ㅋㅋ' + testMessage } })),
});
