/**
 * cookie get
 * @param {string} key
 * @param {function} callback
 */
export function cookieGet(key: string, callback: Function) {
    chrome.cookies.get(
        {
            url: 'https://www.aliexpress.com/',
            name: key,
        },
        (result) => {
            console.log(`[COOKIE] ${key}:`, result);
            callback(result?.value);
        },
    );
}

/**
 * cookie set
 * @param {string} key
 * @param {any} value
 * @param {function} callback
 */
export function cookieSet(key: string, value: any, callback: Function) {
    chrome.cookies.set(
        {
            url: 'https://www.aliexpress.com/',
            name: key,
            value,
            domain: '.aliexpress.com',
        },
        (result) => {
            callback(result?.value);
        },
    );
}
