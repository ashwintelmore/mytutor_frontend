const [api, contextHolder] = notification.useNotification();
notification.config({
    duration: 0,
})

const showNotification = (e) => {
    api.info({
        message: ` ${e}`,
        description: "test",
        e,
    });
};