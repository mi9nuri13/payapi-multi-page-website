import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {

    return (
        <AppContext.Provider value={{  }}>{ children }</AppContext.Provider>
    );
};