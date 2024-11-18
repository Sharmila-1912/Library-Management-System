// src/components/Messages.js
import React from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
    const message = useSelector(state => state.messageReducer.message);

    return (
        <div className="col-md-9 m-auto">
            <br />
            <br />
            {message ? (
                <h3 className="text-center bg-success p-2">{message}</h3>
            ) : (
                <h3 className="text-center bg-success p-2">No Message is Here</h3>
            )}
        </div>
    );
};

export default Messages;
