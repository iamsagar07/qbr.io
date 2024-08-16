import { useCallback, useState } from "react";
import Notifications from "../Toastify/Notification";

const useNotification = () => {
    const [show, setShow] = useState(null);



    const triggerNotifications = useCallback((notificationProps) => {
        let temp;
        setShow(notificationProps);
        clearTimeout(temp);
        temp = setTimeout(() => {
            setShow(null);
        }, notificationProps.duration);
    }, []);

    const handleNotification = show ? (
        <div className="top-right">
            <Notifications {...show} onClose={() => setShow(!show)} />
        </div>
    ) : null;

    return { handleNotification, triggerNotifications };
};

export default useNotification;
