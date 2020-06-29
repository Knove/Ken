/**
 * storage get
 * @param {string} key
 * @param {function} callback
 */
export function get(key: string, callback: Function) {
    chrome.storage.local.get([key], function (result) {
        console.log(`[STORAGE] ALL_DATA:`, result);
        result[key] ? callback(result[key]) : callback(undefined);
    });
}

/**
 * storage set
 * @param {string} key
 * @param {any} value
 * @param {function} callback
 */
export function set(key: string, value: any, callback?: Function) {
    chrome.storage.local.set({ [key]: value }, function () {
        callback && callback(value);
    });
}
