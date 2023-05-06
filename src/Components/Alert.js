import { notification } from "antd";



export const useAlert = () => {
    const [api, contextHolder] = notification.useNotification();
    notification.config({
        duration: 0,
    })

    const showNotification = (e) => {
        api.info({
            message: ` ${e}`,
            description: "Refresh page to see updated changes",
            e,
        });
    };

    return [showNotification, contextHolder];
}
