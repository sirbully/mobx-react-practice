import React from 'react';
import { useLocalStore } from 'mobx-react';
import { CounterStore } from './counterStore';
import { createNoteStore } from './noteStore';

const RootStoreContext = React.createContext(null);

export const RootStoreProvider = ({children}) => {
    const stores = {
        noteStore: useLocalStore(createNoteStore),
        counterStore: new CounterStore()
    }

    return (
        <RootStoreContext.Provider value={stores}>
            {children}
        </RootStoreContext.Provider>
    )
}

export const useRootStore = () => React.useContext(RootStoreContext);