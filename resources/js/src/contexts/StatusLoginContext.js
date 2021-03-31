import React, { createContext, useState } from 'react';

export const StatusLoginContext = createContext();

function StatusLoginProvider({ children }) {

    const [status, setStatus] = useState(false);

    const changeStatus = () => {
        setStatus(true);
    }

    const statusLoginData = {
        status,
        changeStatus,
    }

    return (
        <StatusLoginContext.Provider value={statusLoginData}>
            {children}
        </StatusLoginContext.Provider>
    )

}

export default StatusLoginProvider;

