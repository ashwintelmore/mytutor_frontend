exports.isEmptyFiled = (...args) => {
    console.log('args', args)

    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        if (element === '')
            return 0;
    }
    return 1
};