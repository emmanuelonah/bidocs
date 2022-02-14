import { useState } from 'react';

type FiniteStateMachine = {
  id: string;
  currentStateKey: string;
};

function useStateMachine<StateType>(initialState: FiniteStateMachine & StateType) {
  const [state, setState] = useState<FiniteStateMachine & StateType>(initialState);

  function SEND(currentStateKey: string) {
    setState((state) => ({
      ...state,
      currentStateKey,
    }));
  }

  return { state, SEND };
}

export { useStateMachine };
