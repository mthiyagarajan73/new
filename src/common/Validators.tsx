export const isEmpty = (value:any) => value === undefined || value === null || value === '';
export const secureImage = (imageUrl:any) => {
    if (isEmpty(imageUrl)) {
        return '';
    }
    return imageUrl.replace(/(http:\/\/)/, 'https://').replace(/\s/g, '%20');
};
export const isNumber = (value:any) => {
    if (typeof value === 'string' || typeof value === 'number') {
        return value.toString().match(/^\d*$/) !== null;
    }
    return false;
};
export const isValidEmail = (value:any) => {
    if (typeof value === 'string') {
        return (value
            .trim()
            .match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) !==
            null);
    }
    return false;
};