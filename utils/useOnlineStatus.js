import {useEffect , useState} from "react";

// custome hook for checking online/offline status ----->

const useOnlineStatus = () => {
    
    const [onlineStatus , setOnlineStatus] = useState(true);
    // check if online 
    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online" , () => {
            setOnlineStatus(true);
        });
    } , []);

    // return boolean value
    return onlineStatus;
};

export default useOnlineStatus;