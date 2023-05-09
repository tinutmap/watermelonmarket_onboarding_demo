import { useEffect, useReducer } from "react";

interface stateType {
  status: ResponseStatus;
  // TODO: can pass stateType<T> to data: T if more time to research.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  error?: Error;
}

export enum ResponseStatus {
  Resolved = "RESOLVED",
  Reject = "REJECT",
  Pending = "PENDING",
}

function reducerFunc(state: stateType, action: stateType) {
  switch (action.status) {
    case ResponseStatus.Resolved: {
      return (state = {
        ...state,
        data: action.data,
        status: ResponseStatus.Resolved,
      });
    }
    case ResponseStatus.Pending: {
      return (state = {
        ...state,
        status: ResponseStatus.Pending,
      });
    }
    default: {
      return (state = {
        ...state,
        status: ResponseStatus.Reject,
        error: action.error,
      });
    }
  }
}
export function useAsync<T, K = void>(
  asyncCallBackFn: (args?: K) => Promise<T>,
  dependencyArray: unknown[],
  initialState?: T
) {
  const [state, dispatch] = useReducer(reducerFunc, {
    status: ResponseStatus.Pending,
    data: {},
    ...initialState,
  });

  useEffect(() => {
    asyncCallBackFn()
      .then((result) => {
        dispatch({
          status: ResponseStatus.Resolved,
          data: result,
        });
      })
      .catch((e) => {
        dispatch({
          status: ResponseStatus.Reject,
          error: e,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencyArray, asyncCallBackFn]);
  return { ...state, data: state.data as T };
}
