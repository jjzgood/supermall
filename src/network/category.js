import { request } from './request';

export function getCategory(iid) {
    return request({
        url: '/api/z8/category',
    })
}


export function getSubCategory(maitKey) {
    return request({
        url: '/api/z8/subcategory',
        params: {
            maitKey
        }
    })
}