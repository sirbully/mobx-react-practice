import React from 'react';
import { useRootStore } from '../stores';

export default () => {
    const [note, setNote] = React.useState("");
    const { noteStore } = useRootStore();

    return (
        <>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
            <button onClick={() => noteStore.addNote(note)}>Add note</button>
        </>
    );
}