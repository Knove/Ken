type RecordParams = {
    type: 'click' | 'expose';
    pageType?: string;
} & { [key: string]: string };

/**
 * 解析 URL
 * @param url
 */
export const parseURL = (url: string) => {
    const queryObj: { [key: string]: string } = {};
    const parser = document.createElement('a');
    parser.href = url;

    const queries = parser.search.replace(/^\?/, '').split('&');
    queries.forEach((query) => {
        const [key, val] = query.split('=');

        queryObj[key] = val;
    });

    return {
        queryObj,
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        hash: parser.hash,
    };
};

/**
 * 打点
 * @param params
 */
export function record(params: RecordParams) {
    console.log(params);
}
