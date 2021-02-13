import {useLocation} from 'react-router-dom';
import {config} from "../config";

export function http(...params) {
    params[0] = config.API_URL + params[0];
    return fetch.apply(this, params);
}

export function sortNodesByName(a, b) {
    const
        A = a.name.split('.')[0].padStart(4, '0'),
        B = b.name.split('.')[0].padStart(4, '0');
    return A > B ? 1 : -1;
}

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const childrenSorted = (nodes) => {
    return nodes
        .filter(n => n.name !== 'data.json')
        .sort(sortNodesByName)
        .map(n => {
            if (Array.isArray(n.children)) n.children = childrenSorted(n.children);
            return n;
        })
};

export function setWebStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getWebStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function paginate(data, {page, length = 8}) {
    const start = (page - 1) * length;
    return data.slice().slice(start, start + length);
}

export function range(start, end) {
    return Array(Math.abs(Math.floor(end - start)) + 1).fill(undefined).map((_, idx) => start + idx);
}
