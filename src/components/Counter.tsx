import React from 'react';
import { observer } from 'mobx-react';
import { useRootStore } from '../stores';

export default observer(() => {
    const { counterStore } = useRootStore();

    return (
        <>
            <div>{counterStore.count}</div>
            <button onClick={() => counterStore.increment()}>++</button>
            <button onClick={() => counterStore.decrement()}>--</button>
        </>
    )
});