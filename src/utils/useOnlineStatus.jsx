import { useState, useEffect } from "react";

const useOnlineStatus = () => {

    //try to check online status of user
    const [onlineStatus, setOnlineStatus]= useState(true);

    useEffect(() => {

        window.addEventListener("offline",() =>{
            setOnlineStatus(false);
        });

        window.addEventListener("online",() =>{
            setOnlineStatus(true);
        });
    }, []);
    //return a boolean value indicating online status
    return onlineStatus;
};

export default useOnlineStatus;