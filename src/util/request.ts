import axios from 'axios';

interface RecordParams {
    api: string;
    methods?: 'GET' | 'POST';
}

export default <T extends {}>(params: RecordParams & { data: T }): Promise<any> => {
    const { api, methods, data } = params;
    return axios({
        url: api,
        methods: methods || 'GET',
        data,
    });
};
