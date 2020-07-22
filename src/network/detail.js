import { request } from './request';

export function getDetail(iid) {
    return request({
        url: '/api/n3/detail',
        params: {
            iid
        }
    })
}
