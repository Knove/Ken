export default function init() {
    console.log('| Background init');
    // storage 变更监听
    chrome.storage.onChanged.addListener((changes: object, areaName: string) => {
        console.log(`[STORAGE] TYPE:${areaName} | CHANGE:`, changes);
    });
}
