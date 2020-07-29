import { request } from './request';

export function getCategory(iid) {
    return request({
        url: '/api/n3/category',
    })
}