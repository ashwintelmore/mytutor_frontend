
import React from 'react'
import { Buffer } from 'buffer';

export const isEmptyObjects = (...args) => {
    console.log('args', args)
    const obj = args[0]
    const exceptArrKey = args[1] || []
    const emptyFields = [];

    for (let key in obj) {
        if (exceptArrKey.includes(key))
            continue
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'string' && value.trim() === '') {
                emptyFields.push(key);
            } else if (value == null) {
                emptyFields.push(key);
            }

        }
    }
    if (emptyFields.length == 0) {
        return false
    }
    return emptyFields;
};
export const isEmptyField = (...args) => {

    console.log('args', args)
    for (let index = 0; index < args.length; index++) {
        const e = args[index];
        if (e == '')
            return 1
        else if (e == null)
            return 1
    }
    return 0;
};


export const formatDateYMD = (dateString) => {
    const dateObj = new Date(dateString);

    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getUTCDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
export const formatDateToShow = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = dateObj.toLocaleString('en-US', options);
    return formattedDate;
}

export const isEmptyObj = (obj) => {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

export const bufferToImage = (bufferData) => {
    return `data:${bufferData.image.contentType};base64, ${Buffer.from(bufferData.image.data.data).toString('base64')}`
};

export const isEmptyFiled = (...args) => {
    console.log('args', args)

    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        if (element === '')
            return 0;
    }
    return 1
};


export const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const timeDiffInSeconds = Math.floor((now - date) / 1000);

    if (timeDiffInSeconds < 5) {
        return 'just now';
    } else if (timeDiffInSeconds < 60) {
        return `${timeDiffInSeconds} seconds ago`;
    } else if (timeDiffInSeconds < 3600) {
        const minutes = Math.floor(timeDiffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDiffInSeconds < 86400) {
        const hours = Math.floor(timeDiffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeDiffInSeconds < 172800) {
        return 'yesterday';
    } else {
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return formattedDate;
    }
}

