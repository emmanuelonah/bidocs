import React from 'react';
import { throwError } from './error';

type CreateContextReturnType<ContextType> = [React.Provider<ContextType>, () => ContextType, React.Consumer<ContextType>];

function createContext<ContextType>(displayName: string): CreateContextReturnType<ContextType> {
  const Context = React.createContext<ContextType>(null!);
  Context.displayName = displayName;

  function useContext() {
    const context = React.useContext(Context);

    if (!context) {
      throwError(`${displayName}Error`, "context can't be used outside its <Provider/> scope", useContext);
    }
    return context;
  }

  return [Context.Provider, useContext, Context.Consumer];
}

export { createContext };
