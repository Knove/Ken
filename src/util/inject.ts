/* eslint-disable unicorn/prefer-node-append */
/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable unicorn/prefer-node-remove */
/* eslint-disable unicorn/better-regex */
/**
 * 页面注入JS
 * @param jsPath
 */
export function injectCustomJs(jsPath?: string) {
    const path = jsPath || 'js/inject.js';
    const temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(path);
    temp.onload = function () {
        // @ts-ignore
        this.parentNode.removeChild(this);
    };
    setTimeout(() => {
        document.head.appendChild(temp);
    }, 0);
}

/**
 * 插入组件
 * @param target
 */
export function insertComponents(target: HTMLDivElement) {
    document.body.appendChild(target);
}

/**
 * 删除组件
 * @param className
 */
export function removeComponents(className: string) {
    const componentList = document.querySelectorAll(`.${className}`);
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < componentList.length; i += 1) {
        const node = componentList[i];
        if (node.parentNode) node.parentNode.removeChild(node);
    }
}

/**
 * 插入初始化 div
 */
export function insertInit(callback: Function) {
    const container = document.createElement('div');
    container.id = 'aee-area-container';
    setTimeout(() => {
        insertComponents(container);
        callback();
    }, 3000);
}
